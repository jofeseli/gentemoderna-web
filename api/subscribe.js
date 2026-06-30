module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email, website } = req.body || {};

  // Honeypot: los bots rellenan este campo, los humanos no lo ven
  if (website) {
    return res.status(200).json({ ok: true });
  }

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
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
    // 1. Crear el contacto
    const createRes = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers,
      body: JSON.stringify({ email }),
    });

    const createData = await createRes.json();

    // Si el email ya existe, igualmente añadimos el tag buscando el contacto
    let contactId = createData?.id;

    if (!createRes.ok) {
      const detail = JSON.stringify(createData);
      if (detail.includes("ya se ha utilizado") || detail.includes("already")) {
        // Buscar el contacto existente para obtener su ID
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

    // 2. Añadir el tag "Suscriptor-home" si tenemos el ID
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
