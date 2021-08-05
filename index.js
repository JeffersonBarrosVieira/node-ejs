const express = require('express');
const ejs = require('ejs');
const path = require('path')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));

const dados = require('./public/dados')


app.get('/login', function (req, res) {
    res.render(path.join(__dirname + '/views/page'), { page: './pages/login', msg: dados.teste });
});

app.get('/', (req, res) => {
    res.render(path.join(__dirname + '/views/page'), { page: './pages/home', msg: "Seja bem vindo a Página Inicial" });
});

app.get('/about', (req, res) => {
    res.render(path.join(__dirname + '/views/page'), { page: './pages/about', msg: "Aqui você encontrar conteúdos sobre..." });
});

app.get('/contact', (req, res) => {
    res.render(path.join(__dirname + '/views/page'), { page: './pages/contact', msg: "Blá Blá Blá" });
});



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
