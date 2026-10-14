// Recuento de altas por rango de fechas, leído de Systeme.io.
// Solo devuelve números agregados: nunca emails ni datos de contactos.
// GET /api/stats?since=2026-10-12&until=2026-10-19  (until no incluido)
// Sin parámetros: la última semana completa de lunes a lunes (hora UTC).

const TAG_ID = 1157284; // Suscriptor-home

function lastFullWeek() {
  const now = new Date();
  const day = (now.getUTCDay() + 6) % 7; // 0 = lunes
  const thisMonday = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate() - day));
  const prevMonday = new Date(thisMonday.getTime() - 7 * 864e5);
  return [prevMonday, thisMonday];
}

function parseDay(v) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(String(v || ""))) return null;
  const d = new Date(v + "T00:00:00Z");
  return isNaN(d) ? null : d;
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  let [since, until] = lastFullWeek();
  const qs = parseDay(req.query?.since);
  const qu = parseDay(req.query?.until);
  if (qs && qu) {
    if (qu <= qs || qu - qs > 400 * 864e5) {
      return res.status(400).json({ error: "Rango de fechas no válido" });
    }
    since = qs;
    until = qu;
  }

  const apiKey = process.env.SYSTEME_API_KEY || process.env.systemeapykey;
  if (!apiKey) return res.status(500).json({ error: "API key no configurada" });

  const headers = { "X-API-Key": apiKey, accept: "application/json" };
  let altas = 0;
  let altasHome = 0;
  let totalContactos = 0;
  let after = null;

  try {
    for (let page = 0; page < 50; page++) {
      const url = new URL("https://api.systeme.io/api/contacts");
      url.searchParams.set("limit", "100");
      url.searchParams.set("order", "desc");
      if (after) url.searchParams.set("startingAfter", String(after));

      const r = await fetch(url, { headers });
      if (!r.ok) {
        console.error("Systeme.io stats error:", r.status, await r.text());
        return res.status(502).json({ error: "Systeme.io no responde", status: r.status });
      }
      const data = await r.json();
      const items = data?.items || [];
      totalContactos += items.length;

      for (const c of items) {
        const at = new Date(c.registeredAt || c.createdAt || 0);
        if (at >= since && at < until) {
          altas++;
          if ((c.tags || []).some((t) => t && Number(t.id) === TAG_ID)) altasHome++;
        }
      }

      if (!data?.hasMore || !items.length) break;
      after = items[items.length - 1].id;
    }
  } catch (err) {
    console.error("Stats fetch error:", err.message);
    return res.status(502).json({ error: "Error de conexión con Systeme.io" });
  }

  res.setHeader("Cache-Control", "s-maxage=600");
  return res.status(200).json({
    since: since.toISOString().slice(0, 10),
    until: until.toISOString().slice(0, 10),
    altas,
    altasHome,
    totalContactos,
  });
};
