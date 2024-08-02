0x01-ES6_promise
Project Overview
This project explores ES6 Promises in JavaScript. Promises are used to handle asynchronous operations, providing a more robust and cleaner alternative to callbacks.

Learning Objectives
Understand the concept of a Promise in JavaScript.
Learn how to create and use Promises to handle asynchronous operations.
Understand the states of a Promise (pending, fulfilled, rejected).
Learn how to use .then() and .catch() methods for handling resolved and rejected Promises.
Understand chaining of Promises for sequential asynchronous operations.
Learn how to use Promise.all() and Promise.race() to handle multiple Promises.
Project Structure
The project consists of the following files:

0-promise.js: Contains the implementation of the function that returns a Promise.
0-main.js: Contains the test code to verify the implementation.
babel.config.js: Babel configuration file.
package.json: Contains project metadata and dependencies.
.eslintrc.js: ESLint configuration file.
utils.js: Utility functions for use in various tasks.
Installation
To set up the project, follow these steps:

Ensure you have Node.js and npm installed:

Download and install Node.js if you haven't already.
Clone the repository:

sh
Copy code
git clone <repository-url>
cd 0x01-ES6_promise
Add the configuration files:

Add babel.config.js, .eslintrc.js, and utils.js files to your project directory as specified.
Install Jest, Babel, and ESLint using the supplied package.json:

sh
Copy code
npm install
Configuration Files
package.json
Contains the dependencies and scripts for the project. Here is an example structure:

json
Copy code
{
  "name": "0x01-ES6_promise",
  "version": "1.0.0",
  "description": "",
  "main": "0-promise.js",
  "scripts": {
    "test": "jest",
    "dev": "nodemon --exec babel-node 0-main.js"
  },
  "dependencies": {},
  "devDependencies": {
    "@babel/cli": "^7.12.1",
    "@babel/core": "^7.12.3",
    "@babel/node": "^7.12.1",
    "@babel/preset-env": "^7.12.1",
    "eslint": "^7.12.1",
    "jest": "^26.6.3",
    "nodemon": "^2.0.6"
  }
}
babel.config.js
Configure Babel to transpile modern JavaScript syntax:

js
Copy code
module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }]
  ]
};
.eslintrc.js
Configure ESLint for code linting:

js
Copy code
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off'
  }
};
utils.js
Utility functions used in the project:

js
Copy code
// Example utility functions
export function uploadPhoto() {
  return Promise.resolve({
    status: 200,
    body: 'photo-profile-1'
  });
}

export function createUser() {
  return Promise.resolve({
    firstName: 'Guillaume',
    lastName: 'Salva'
  });
}
Usage
Running the Project
To run the project and test your Promises implementation:

Run the main script:

sh
Copy code
npm run dev
Run tests:

sh
Copy code
npm test
Example
Here is an example implementation of a Promise function and a test:

0-promise.js
js
Copy code
/* eslint-disable */
export default function getResponseFromAPI() {
  return new Promise((resolve, reject) => {});
}
0-main.js
js
Copy code
import getResponseFromAPI from "./0-promise.js";

const response = getResponseFromAPI();
console.log(response instanceof Promise);
Conclusion
This project provides a practical introduction to using Promises in JavaScript. By following the steps outlined in this README, you should be able to set up your environment, implement Promises, and run tests to ensure your code works as expected. Promises are a powerful tool for managing asynchronous operations, and mastering them will greatly enhance your JavaScript programming skills.
