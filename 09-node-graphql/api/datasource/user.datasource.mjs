import { RESTDataSource } from "apollo-datasource-rest";

export class UsersApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
  }

  async getUsers() {
    const users = await this.get("/users");

    return users.map(async (user) => ({
      ...user,
      role: await this.get(`/roles/${user.role}`),
    }));
  }

  async getUserById(id) {
    const user = await this.get(`/users/${id}`);

    return {
      ...user,
      role: await this.get(`/roles/${user.role}`),
    };
  }

  async addUser(user) {
    const users = await this.get("/users");

    const role = (await this.get(`/roles?type=${user.role}`))[0];

    user.role = role.id;

    user.id = users.length + 1;

    await this.post("/users", user);

    return this.getUserById(user.id);
  }

  async updateUser(user) {
    const role = (await this.get(`/roles?type=${user.role}`))[0];

    const updateUser = {
      id: user.id,
      name: user.name,
      email: user.email,
      active: user.active,
      role: role.id,
    };

    await this.put(`/users/${user.id}`, updateUser);

    return this.getUserById(user.id);
  }

  async deleteUser({ id }) {
    await this.delete(`/users/${id}`);
    return id;
  }
}
