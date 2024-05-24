// THIS IS A MODULE
var url = "http://mylogger.io/log";

function log(message) {
  // send an HTTP request
  console.log(message);

  //   OS modules
  const os = require("os");
  console.log(os.freemem());
  console.log(os.totalmem());

  //   File system modules
  const fs = require("fs");
  const files = fs.readdirSync("./");
  console.log(files);
  fs.readdir("./", function (err, files) {
    if (err) console.log("Error: ", err);
    else console.log("Result: ", files);
  });

  //   EVENTS
  const EventEmitter = require("events"); //capitalize each first letter to show that it is a class
  const emitter = new EventEmitter();

  emitter.on("messageLogged", function (arg) {
    console.log("Listener called ", arg);
  }); // Register Listener

  emitter.emit("messageLogged", { id: 1, url: "https://" }); //Raise an event and events arguments

  // HTTP module
  const http = require("http");
  const server = http.createServer((req, res) => {
    if (req.url === "/") {
      res.write("Hello world");
      res.end();
    }
    if (req.url === "/api/courses") {
      res.write(JSON.stringify([1, 2, 3, 4])); //basically access the database and return the response
      res.end();
    }
  });

  //   server.on("connection", (socket) => {
  //     console.log("New connection ...");
  //   }); //the name connection can be found on the documentation

  server.listen(3000); //listen to port 3000
  console.log("Listening on port 3000 ...");
}

module.exports.log = log;
