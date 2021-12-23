const config = require("config");
const express = require("express");
const bodyparser = require("body-parser");
const routerProvider = require("./routes/providers");

const port = config.get("api.port");

const app = express();

app.use(bodyparser.json());

app.use("/api/providers", routerProvider);

app.listen(port, () => {
  console.log(`PetShop API Running on port ${port}`);
});
