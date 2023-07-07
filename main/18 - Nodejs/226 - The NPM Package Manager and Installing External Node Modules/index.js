
const superheroes = require('superheroes');

console.log(superheroes.random());



const supervillains = require('supervillains');

console.log(supervillains.random());

// @chirag127 ➜ /workspaces/The-Complete-Web-Development-Bootcamp (main) $ node "/workspaces/The-Complete-Web-Development-Bootcamp/main/18 - Nodejs/226 - The NPM Package Manager and Installing External Node Modules/index.js"
// Ozymandias
// node:internal/modules/cjs/loader:1073
//   throw err;
//   ^

// Error: Cannot find module 'supervillains'
// Require stack:
// - /workspaces/The-Complete-Web-Development-Bootcamp/main/18 - Nodejs/226 - The NPM Package Manager and Installing External Node Modules/index.js
//     at Module._resolveFilename (node:internal/modules/cjs/loader:1070:15)
//     at Module._load (node:internal/modules/cjs/loader:923:27)
//     at Module.require (node:internal/modules/cjs/loader:1137:19)
//     at require (node:internal/modules/helpers:121:18)
//     at Object.<anonymous> (/workspaces/The-Complete-Web-Development-Bootcamp/main/18 - Nodejs/226 - The NPM Package Manager and Installing External Node Modules/index.js:8:23)
//     at Module._compile (node:internal/modules/cjs/loader:1255:14)
//     at Module._extensions..js (node:internal/modules/cjs/loader:1309:10)
//     at Module.load (node:internal/modules/cjs/loader:1113:32)
//     at Module._load (node:internal/modules/cjs/loader:960:12)
//     at Function.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:83:12) {
//   code: 'MODULE_NOT_FOUND',
//   requireStack: [
//     '/workspaces/The-Complete-Web-Development-Bootcamp/main/18 - Nodejs/226 - The NPM Package Manager and Installing External Node Modules/index.js'
//   ]
// }

// Node.js v20.3.0
// @chirag127 ➜ /workspaces/The-Complete-Web-Development-Bootcamp (main) $

// i have not installed supervillains package so it is giving error

// // @chirag127 ➜ /workspaces/The-Complete-Web-Development-Bootcamp (main) $ npm install supervillains

// Node.js v20.3.0
// @chirag127 ➜ /workspaces/The-Complete-Web-Development-Bootcamp (main) $ npm install supervillains

// added 3 packages in 2s