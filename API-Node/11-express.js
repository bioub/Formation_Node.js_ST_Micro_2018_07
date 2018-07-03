const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello'); // obligatoire
});

app.get('/redirect', (req, res) => {
  res.redirect('http://www.google.fr/'); // obligatoire
});

app.get('/api/todos/1', (req, res) => {
  res.json({
    value: 'Aller déjeuner maintenant',
  }); // obligatoire
});

app.listen(8080, () => {
  console.log('Server started');
});
