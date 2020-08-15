import { Incident } from "./schemas/Incident";
import { DB } from "./database/engine/DB";
import { Task } from "./schemas/Task";
import { User } from "./schemas/User";
var testinc = new Incident();
var testTask = new Task();

console.log(testinc.getValue("number"));

console.log(testinc.getValue("guid"));

console.log(testinc.getValue("class"));

let incDB = new DB(testinc);
incDB.insert();

let taskDB = new DB();
taskDB.loadDatabase("task");
taskDB.insert(testTask);

let luke = new User();
luke.setValue("first_name", "Luke");
luke.setValue("last_name", "Van Epen");
console.log(luke.getValue("name"));

let userDB = new DB(luke);
userDB.insert();
