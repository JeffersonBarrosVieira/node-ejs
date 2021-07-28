const express = require('express');
const app = express();

app.set('view engine', 'ejs') // Definindo qual engine o node vai utilizar (neste caso o Ejs)

// app.get('/home', (req, res) => {
//     res.render('../views/home')
// })

app.get('/', (req, res) => {
    res.json({
        name: 'Jefferson',
        idade: 27
    });
})

app.listen(3000, () => {
    console.log("Executando na porta 3000!");
})