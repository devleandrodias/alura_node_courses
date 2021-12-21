const express = require("./config/express.config");

const port = 3000;
const app = express();

app.listen(port, () => {
  console.log(`Application running on PORT ${port}`);
});
