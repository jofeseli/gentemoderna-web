module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body || {};

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  const apiKey = process.env.SYSTEME_API_KEY || process.env.systemeapykey;

  if (!apiKey) {
    return res.status(500).json({ error: "API key no configurada" });
  }

  try {
    const response = await fetch("https://api.systeme.io/api/contacts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-Key": apiKey,
        "accept": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (response.ok) {
      return res.status(200).json({ ok: true });
    }

    console.error("Systeme.io error:", JSON.stringify(data));
    return res.status(500).json({ error: "Error al suscribir", detail: data });

  } catch (err) {
    console.error("Fetch error:", err.message);
    return res.status(500).json({ error: "Error de conexión" });
  }
};
