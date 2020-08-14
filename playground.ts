import { Incident } from "./schemas/Incident";

var testinc = new Incident();

console.log(testinc.getValue("number"));

console.log(testinc.getValue("guid"));

console.log(testinc.getValue("class"));

testinc.insert();
