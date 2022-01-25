import { roleResolver } from "./role/role.resolver.mjs";
import { userResolver } from "./user/user.resolver.mjs";

export const resolvers = [userResolver, roleResolver];
