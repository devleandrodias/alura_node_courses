const tables = require("./infrastructure/tables");
const express = require("./config/express.config");
const connection = require("./infrastructure/mysql.connection");
const mysqlConnection = require("./infrastructure/mysql.connection");

mysqlConnection.connect((err) => {
  if (err) console.error("Database connection fail...");
  else {
    const port = 3000;
    const app = express();

    console.log("Database connected with success!");

    tables.init(connection);

    app.listen(port, () => {
      console.log(`Application running on PORT ${port}`);
    });
  }
});
