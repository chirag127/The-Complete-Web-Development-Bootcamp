
const fs = require('fs');

fs.writeFile('file.txt', 'hello world', (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});