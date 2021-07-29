const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res) => res.send('Rota da Página Inicial'));

app.get('/about', (req, res) => res.send('Rota da Página Sobre'));

app.get('/portfolio', (req, res) => res.send('Rota da Página Portfólio'));

app.get('/teste', (req,res) => {

    var msg='Funcionou!!';

    ejs.renderFile('views/index.ejs', {msg:msg}, (err, data) => {
        console.log(err);
        res.send(data);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
