const express = require('express');
const ejs = require('ejs');
const app = express();

app.set('view engine', 'ejs');

let ejsOptions = {
    // delimiter: '?', Adding this to tell you do NOT use this like I've seen in other docs, does not work for Express 4
    async: true
};

// The engine is using a callback method for async rendering
app.engine('ejs', async (path, data, cb) => {
    try{
        let html = await ejs.renderFile(path, data, ejsOptions);
        cb(null, html);
    }catch (e){
        cb(e, '');
    }
});

const standardResponse = (err, html, res) => {
    // If error, return 500 page
    if (err) {
        console.log(err);
        // Passing null to the error response to avoid infinite loops XP
        return res.status(500).render(`login.ejs`, { msg : '500', error: err }, (err, html) => standardResponse(null, html, res));
        // Otherwise return the html
    } else {
        return res.status(200).send(html);
    }
}

app.get('/login', async (req, res) =>{
      // layout.ejs is my version of blocking. I pass the page name as an option to render custom pages in the template
      return await res.render(`login.ejs`, { msg : 'login' }, (err, html) => standardResponse(err, html, res));
})

app.get('/', (req, res) => res.send('Rota da Página Inicial'));

app.get('/about', (req, res) => res.send('Rota da Página Sobre'));

app.get('/portfolio', (req, res) => res.send('Rota da Página Portfólio'));

app.get('/contact', (req,res) => {

    res.set({ 'content-type': 'text/html; charset=utf-8' });

    res.render('login.ejs', {msg: "mensagem inserida"}, (err, data) => {
        console.log(err);
        res.send(data);
    });

});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on ${port}, http://localhost:${port}`));
