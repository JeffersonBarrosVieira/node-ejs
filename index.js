const express = require('express');

const app = express();

app.get('/', (req, res) => res.send('Home Page Route'));

app.get('/about', (req, res) => res.send('About Page Route'));

app.get('/portfolio', (req, res) => res.send('Portfolio Page Route'));

app.set('view engine', 'ejs');

app.get('/home', (req, res) => res.render('../views/home'));

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
