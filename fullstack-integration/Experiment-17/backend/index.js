const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const products = [
  { id: 1, name: 'Laptop', price: 1200 },
  { id: 2, name: 'Mouse', price: 25 },
  { id: 3, name: 'Keyboard', price: 45 },
  { id: 4, name: 'Monitor', price: 300 },
  { id: 5, name: 'Headphones', price: 80 }
];

app.get('/api/products', (_req, res) => {
  res.json(products);
});

app.get('/', (_req, res) => {
  res.send('API running. Try GET /api/products');
});

app.listen(PORT, () => console.log(`API listening on http://localhost:${PORT}`));
