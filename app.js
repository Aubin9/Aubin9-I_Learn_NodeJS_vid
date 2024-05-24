"use strict";

function sayHello(name) {
  console.log(`hello ${name}`); //ES6/2025
  //global obj e.g.: setTimeout(), clearTimeout(), setInterval(), clearInterval(), console.log()
}
sayHello("Aubin");

// Load a module
const logger = require("./logger"); //return the exported object of the logger.js file
// better to use const instead if var to prevent data from accidental overwrite. use "jshing app.js" in terminal for troubleshoot
console.log(logger);
logger.log("message");

// 8. OS modules
