module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, website, ts } = req.body || {};
  const cfToken = req.body?.['cf-turnstile-response'];

  // 1. Honeypot
  if (website) {
    return res.status(200).json({ ok: true });
  }

  // 2. Cloudflare Turnstile — verificación criptográfica anti-bot
  const turnstileSecret = process.env.TURNSTILE_SECRET_KEY;
  if (turnstileSecret) {
    if (!cfToken) {
      return res.status(200).json({ ok: true });
    }
    try {
      const verifyRes = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ secret: turnstileSecret, response: cfToken }),
      });
      const verifyData = await verifyRes.json();
      if (!verifyData.success) {
        return res.status(200).json({ ok: true });
      }
    } catch (e) {
      console.error('Turnstile verify error:', e.message);
    }
  }

  // 3. Token de tiempo (capa adicional)
  if (!ts || (Date.now() - parseInt(ts, 10)) < 3000) {
    return res.status(200).json({ ok: true });
  }

  // 3. Validación básica de email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  // 4. Filtro de patrón bot: emails con demasiados puntos en la parte local
  // Ejemplo: ka.ren.abe.r.g.en.d.o.rf@gmail.com
  const localPart = email.split("@")[0];
  if ((localPart.match(/\./g) || []).length > 3) {
    return res.status(200).json({ ok: true });
  }

  const apiKey = process.env.SYSTEME_API_KEY || process.env.systemeapykey;

  if (!apiKey) {
    return res.status(500).json({ error: "API key no configurada" });
  }

  const headers = {
    "Content-Type": "application/json",
    "X-API-Key": apiKey,
    "accept": "application/json",
  };

  try {
    // Crear el contacto
    const createRes = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify({ email }),
    });

    const createData = await createRes.json();

    let contactId = createData?.id;

    if (!createRes.ok) {
      const detail = JSON.stringify(createData);
      if (detail.includes("ya se ha utilizado") || detail.includes("already")) {
        const searchRes = await fetch(
          `https://api.systeme.io/api/contacts?email=${encodeURIComponent(email)}`,
          { method: "GET", headers }
        );
        const searchData = await searchRes.json();
        contactId = searchData?.items?.[0]?.id;
      } else {
        console.error("Systeme.io error:", detail);
        return res.status(500).json({ error: "Error al suscribir", detail: createData });
      }
    }

    // Añadir el tag "Suscriptor-home"
    if (contactId) {
      await fetch(`https://api.systeme.io/api/contacts/${contactId}/tags`, {
        method: "POST",
        headers,
        body: JSON.stringify({ tagId: 1157284 }),
      });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("Fetch error:", err.message);
    return res.status(500).json({ error: "Error de conexión" });
  }
};
