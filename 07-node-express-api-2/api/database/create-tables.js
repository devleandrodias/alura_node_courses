const model = require("../routes/providers/model-table-provider");

model
  .sync()
  .then(() => {
    console.log("Table created with success!");
  })
  .catch(console.error);
