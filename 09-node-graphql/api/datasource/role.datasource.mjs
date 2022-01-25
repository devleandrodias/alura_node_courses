import { RESTDataSource } from "apollo-datasource-rest";

export class RolesApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3000";
  }

  getRoles() {
    return this.get("/roles");
  }
}
