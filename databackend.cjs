// server.js
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5173;

app.use(bodyParser.json());

let items = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  {id:4,nane:"madhur"}
];

app.get('/api/items', (req, res) => {
  res.json(items);
});

app.post('/api/items', (req, res) => {
  const newItem = req.body;
  newItem.id = items.length + 1; // Assign a unique ID
  items.push(newItem);
  res.status(201).send('Item added successfully');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
