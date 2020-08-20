import * as path from "path";
process.env.projectRoot = path.resolve("./");

import { User } from "./shared/schemas/User";

let user1 = new User();

user1.setValue("first_name", "Luke");
user1.setValue("last_name", "Van Epen");

//Calculated value based on an onChange event handler
console.log(user1.getValue("name"));
