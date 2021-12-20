const express = require("express");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Application running on PORT ${port}`);
});

app.get("/", (req, res, next) => {
  res.send("Hello express!");
});
