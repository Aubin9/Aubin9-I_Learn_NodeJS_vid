const startupDebugger = require("debug")("app:startup");
const dbDebugger = require("debug")("app:db");
const config = require("config");
const morgan = require("morgan");
const helmet = require("helmet");
// const Joi = require("joi"); // validation dependency
const express = require("express");
const app = express();
const logger = require("./Middleware/logger"); //middleware
const authenticate = require("./Middleware/auth"); //middleware
const courses = require("./routes/courses");
const home = require("./routes/home");

app.set("View engine", "pug");
app.set("views", "./views");

// environemt
console.log(`NODE_ENV: ${process.env.NODE_ENV}`); //return the environment for this node application can be set to development, testing, staging, production, undefine
app.get("env");
console.log(`app: ${app.get("env")}`);

//example of middleware function
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); //(public folder)
app.use(helmet());
if (app.get("env") === "development") {
  app.use(morgan("tiny")); //look the documentation
  startupDebugger("Morgan enabled...");
}
dbDebugger("Connected to the database...");
app.use("/api/courses", courses);
app.use("/", home);

// Configuration
console.log("Application Name: " + config.get("name"));
console.log("Mail Server: " + config.get("mail.host")); //set NODE_ENV=development or production
console.log("Mail Password: " + config.get("mail.password"));

// Middleware function
app.use(authenticate);
// Middleware function
app.use(logger);

// app.get();
// app.post();
// app.put();
// app.delete();

// environement variable: PORT
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port} ...`));

// ****************************************************************

// Asynchronous function / non blocking function
// getUser(1, (user) => {
//   // Get repositories
//   getRepositories(user.gitHubUsername, (repos) => {
//     console.log("Repos", repos);
//   });
// });

// Promise-based approach
// const p = getUser(1);
// p.then((user) => getRepositories(user.gitHubUsername))
//   .then((repos) => getCommits(repos[0]))
//   .then((commits) => console.log("Commits", commits))
//   .catch((err) => console.log("Error", err.message));

// Callback functions
function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading a useer from a database...");
      resolve({ id: id, gitHubUsername: "Aubin9" });
    }, 2000);
  });
}
const getRepositories = (username) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling Github API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
};
const getCommits = (commit) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(["commit1", "commit2"]);
    }, 2000);
  });
};

// Async / Await: help write asynchronous code like synchronous code
async function displayCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.gitHubUsername);
    const commits = await getCommits(repos[0]);
    console.log(commits);
  } catch (error) {
    console.log("Error ", err.message);
  }
}
displayCommits();
