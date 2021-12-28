const router = require("express").Router();
const Provider = require("./provider.model");

router.get("/", async (req, res) => {
  res.status(200).send(await new Provider().findAll());
});

router.get("/:id", async (req, res) => {
  res.status(200).send(await new Provider({ id: req.params.id }).findById());
});

router.post("/", async (req, res) => {
  res.status(201).send(await new Provider(req.body).create());
});

router.put("/:id", async (req, res) => {
  const data = Object.assign({}, req.body, { id: req.params.id });
  return res.status(200).send(new Provider(data).update());
});

module.exports = router;
