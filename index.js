const express = require('express');
const ejs = require('ejs');
var path = require('path')
const app = express();

// app.set('view engine', 'ejs');

// let ejsOptions = {
//     // delimiter: '?', Adding this to tell you do NOT use this like I've seen in other docs, does not work for Express 4
//     async: true
// };

// // The engine is using a callback method for async rendering
// app.engine('ejs', async (path, data, cb) => {
//     try{
//         let html = await ejs.renderFile(path, data, ejsOptions);
//         cb(null, html);
//     }catch (e){
//         cb(e, '');
//     }
// });

app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname + '/routes/login.html'));
});

app.get('/', (req, res) => res.send('Rota da Página Inicial'));

app.get('/about', (req, res) => res.send('Rota da Página Sobre'));

app.get('/portfolio', (req, res) => res.send('Rota da Página Portfólio'));



const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
