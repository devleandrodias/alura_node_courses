const model = require("../providers/model-table-provider");

module.exports = {
  findAll() {
    return model.findAll();
  },
};
