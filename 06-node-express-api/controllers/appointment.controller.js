const appointment = require("../models/appointment");

module.exports = function (app) {
  app.get("/appointments", (_, res) => {
    res.send("Appointments!");
  });

  app.post("/appointments", (req, res) => {
    appointment.create(req.body, res);
  });
};
