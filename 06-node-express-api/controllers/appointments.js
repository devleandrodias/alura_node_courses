module.exports = function (app) {
  app.get("/appointments", (_, res) => {
    res.send("Appointments!");
  });

  app.post("/appointments", (req, res) => {
    console.log(req.body);
    res.send("POST");
  });
};
