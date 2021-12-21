const express = require("./config/express.config");
const mysqlConnection = require("./infrastructure/mysql.config");

mysqlConnection.connect((err) => {
  if (err) console.error("Database connection fail...");
  else {
    const port = 3000;
    const app = express();

    console.log("Database connected with success!");

    app.listen(port, () => {
      console.log(`Application running on PORT ${port}`);
    });
  }
});
