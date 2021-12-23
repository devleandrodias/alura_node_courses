const router = require("express").Router();
const repositoy = require("../providers/provider.repository");

router.get("/", async (req, res) => {
  res.status(200).send(await repositoy.findAll());
});

module.exports = router;
