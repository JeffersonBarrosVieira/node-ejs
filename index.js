const express = require('express');
const ejs = require('ejs');
const path = require('path')
const app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('ejs', ejs.renderFile);
app.set('view engine', 'ejs');

app.use(express.static('public'));

const dados = require('./public/dados')

function criarRota(rota, dados){
    app.get(`/${rota}`, (req, res) => {
        res.render(path.join(__dirname + '/views/page'), dados[`${rota}`] );
    });
}

criarRota('/', dados)
criarRota('about', dados);
criarRota('login', dados);
criarRota('contact', dados);




const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
