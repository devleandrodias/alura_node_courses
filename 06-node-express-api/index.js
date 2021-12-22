const customExpress = require("./config/express.config");
const tables = require("./infrastructure/database/tables");
const mysqlConnection = require("./infrastructure/database/mysql.connection");

mysqlConnection.connect((err) => {
  if (err) console.error("Database connection fail...");
  else {
    const port = 3000;
    const app = customExpress();

    console.log("Database connected with success!");

    tables.init(mysqlConnection);

    app.listen(port, () => {
      console.log(`Application running on PORT ${port}`);
    });
  }
});
