module.exports = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");

  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    res.status(405).json({ error: "Método não permitido." });
    return;
  }

  res.status(503).json({
    error: "O envio de relatos ainda não está integrado a um serviço de atendimento."
  });
};
