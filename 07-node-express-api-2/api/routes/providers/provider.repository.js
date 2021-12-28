const model = require("../providers/model-table-provider");

module.exports = {
  async findAll() {
    return model.findAll();
  },

  async findById(id) {
    return model.findOne({ where: { id } });
  },

  async create(provider) {
    return model.create(provider);
  },

  async update(provider, id) {
    return model.update(provider, { where: { id } });
  },
};
