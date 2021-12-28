const repositoy = require("./provider.repository");

class Provider {
  constructor({ id, company, email, category, createdAt, updatedAt, version }) {
    this.id = id;
    this.company = company;
    this.email = email;
    this.version = version;
    this.category = category;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
  }

  async findAll() {
    return repositoy.findAll();
  }

  async findById() {
    const result = await repositoy.findById(this.id);

    if (!result) throw new Error("Provider not found!");

    this.id = result.id;
    this.email = result.email;
    this.company = result.company;
    this.category = result.category;
    this.createdAt = result.createdAt;
    this.updatedAt = result.updatedAt;

    return this;
  }

  async create() {
    const result = await repositoy.create({
      email: this.email,
      company: this.company,
      category: this.category,
    });

    this.id = result.id;
    this.version = result.version;
    this.createdAt = result.createdAt;
    this.updatedAt = result.updatedAt;

    return this;
  }

  async update() {
    const fields = ["company", "email", "category"];

    const dataUpdated = {};

    fields.forEach((field) => {
      const value = this[field];

      if (typeof value === "string") {
        dataUpdated[field] = value;
      }
    });

    if (!Object.keys(dataUpdated).length) {
      throw new Error("Data not collecteds");
    }

    return repositoy.update(dataUpdated, this.id);
  }
}

module.exports = Provider;
