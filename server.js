const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve React build
app.use(express.static(path.join(__dirname, 'build')));

// JSON Server
const router = jsonServer.router('./db/db.json'); // path to your db.json
const middlewares = jsonServer.defaults();
app.use('/api', middlewares, router);

// Fallback for React (client-side routing support)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
