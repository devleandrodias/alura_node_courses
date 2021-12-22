const faker = require("faker");
const express = require("express");
const bodyparser = require("body-parser");

const app = express();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/:cpf", (req, res) => {
  const { cpf } = req.params;

  res.status(200).json({
    cpf,
    name: faker.name.findName(),
    birthDate: faker.date.past(),
  });
});

app.listen(8082, () => {
  console.log("API Customer Online...");
});
