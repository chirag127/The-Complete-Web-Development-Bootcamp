import express from 'express';
const app = express();
const port = 3000;

// Handling GET Request
app.get('/', (req, res) => {
  res.send('Hello World - GET');
});

// Handling POST Request
app.post('/', (req, res) => {
  res.send('Hello World - POST');
});

// Handling PUT Request
app.put('/', (req, res) => {
  res.send('Hello World - PUT');
});

// Handling PATCH Request
app.patch('/', (req, res) => {
  res.send('Hello World - PATCH');
});

// Handling DELETE Request
app.delete('/', (req, res) => {
  res.send('Hello World - DELETE');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
