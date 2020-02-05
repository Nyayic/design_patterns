//import the laptop class
//use it and test it
const Laptops = require("./models/laptops")
let hp = new Laptops(500,2,2.3,6,15,'probook','uk',3000,'windows',889898998);
console.log(hp.printableString());
module.exports = hp