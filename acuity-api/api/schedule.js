export default async function handler(req, res) {
  // CORS so Webflow can call this safely
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  try {
    const r = await fetch("https://acuityscheduling.com/api/v1/availability/classes", {
      headers: {
        "Authorization": "Basic " + Buffer
          .from("36421643:23195169e787e0737880cb2f9882993f")
          .toString("base64")
      }
    });
    const data = await r.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: String(err) });
  }
}
