const express = require('express');
const ejs = require('ejs');
var path = require('path')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.get('/login', function (req, res) {
    res.render(path.join(__dirname + '/views/login.ejs'));
});

app.get('/', (req, res) => res.send('Rota da Página Inicial'));

app.get('/about', (req, res) => res.send('Rota da Página Sobre'));

app.get('/portfolio', (req, res) => res.send('Rota da Página Portfólio'));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
