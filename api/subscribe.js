export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Email inválido" });
  }

  const apiKey = process.env.SYSTEME_API_KEY;

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

    if (response.ok) {
      return res.status(200).json({ ok: true });
    }

    const error = await response.json();
    console.error("Systeme.io error:", error);
    return res.status(500).json({ error: "Error al suscribir" });

  } catch (err) {
    console.error("Fetch error:", err);
    return res.status(500).json({ error: "Error de conexión" });
  }
}
