const model = require("../models/pet");

module.exports = (app) => {
  app.get("/pet", (_, res) => {
    model.getAll(res);
  });

  app.post("/pet", (req, res) => {
    model.create(req.body, res);
  });
};
