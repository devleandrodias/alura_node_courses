const appointment = require("../models/appointment");

module.exports = function (app) {
  app.get("/appointments", (_, res) => {
    appointment
      .getAll()
      .then((value) => {
        res.status(200).json(value);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.get("/appointments/:id", (req, res) => {
    const id = Number(req.params.id);
    appointment.getById(id, res);
  });

  app.post("/appointments", (req, res) => {
    appointment
      .create(req.body, res)
      .then((value) => {
        res.status(201).send(value);
      })
      .catch((err) => {
        res.status(400).json(err);
      });
  });

  app.put("/appointments/:id", (req, res) => {
    const id = Number(req.params.id);
    appointment.update(id, req.body, res);
  });

  app.delete("/appointments/:id", (req, res) => {
    const id = Number(req.params.id);
    appointment.delete(id, res);
  });
};
