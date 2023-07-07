# How to Use the Native Node Modules


node comes with a lot of built-in modules. we can use them by requiring them in our code.

## The fs module

the fs module is used to read and write files. it's a core module, so we don't need to install it.

### read a file

```javascript
const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### write a file

```javascript

const fs = require('fs');

fs.writeFile('file.txt', 'hello world', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});

```

# we have to create the my-project folder first

```bash
mkdir my-project
cd my-project
touch read.js
touch write.js

node read.js
node write.js
```


## now use teh copy file sync for te read.js file

```javascript

const fs = require('fs');

const data = fs.readFileSync('file.txt', 'utf8');

console.log(data);

```

## now use teh copy file sync for te copy the file from file.txt to file2.txt

```javascript


const fs = require('fs');

fs.copyFileSync('file.txt', 'file2.txt');

```


now in teh next lecture we will learn about the external modules

we will use the npm to install the external modules

what is node package manager

npm is a package manager for node.js packages, or modules if you like. www.npmjs.com hosts thousands of free packages to download and use. the npm program is installed on your computer when you install node.js

## how to install the external modules

```bash

npm install lodash

```

## how to use the external modules

```javascript

const _ = require('lodash');

const items = [1, [2, [3, [4]]]];

const newItems = _.flattenDeep(items);

console.log(newItems);

```

## anolotuy with hte python

```bash

pip install numpy

```

like the python we can use the npm to install the external modules

in the pyteon we have e 