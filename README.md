# NodeJS - Intro: SIAHA TOUKO Aubin

npm cache clean --force

What is NodeJS? it is an open source cross platform runtime environment for executing JavaScript code outside of the browser. Used to build backend services(API): store data, push notifications, send email, etc.

- Node is a C++ program that embeds Chrome’s v8 engine

Adv:

- great for prototyping and agile development;
- superfast and highly scalable
- use JavaScript
- cleaner and more consistent codebase
- large ecosystem of open-source libs

How it works

- We have a single thread to handle many requests at the same time: it is assynchronous !
- when a the result is ready from the database, it let know the thread by setting a message in the event queue

How to install node:
https://nodejs.org

- run the js with node: "node app.js" app represent the file name we want to run
- Node core

## 2 Node module system

- what modules are? used not to overwrite two variables or two functions with the same name defined somewhere else (encapsulation)
- why do we need them?
- how do they work?
- Operating system(OS): go to node documentation
- File system (fs): go to node documentation
- events: signal that indicate that something has happened in our application
- http
- Global object
- ECMAScript 6/2015: ES6/2015: made use of the backticks characters rather than concatenation, use of arrow functions
