const express = require('express');
const sequelize = require('./script/db');
const app = express();
app.use(express.static('/public'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//arquivos html!!
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/accont.html', (req, res) => {
    res.sendFile(__dirname + '/accont.html');


//arquivos css!!
});
app.get('/css/style.css', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');

    //imagens
});
app.get('/imagens', (req, res) => {
    res.sendFile(__dirname + '/imagens/tecladoGamer.jpg')
})

//arquivos js
app.get('/script/index.js', (req, res) => {
    res.sendFile(__dirname + '/script/index.js')
})
//arquivos nodejs
app.get('/script/db', (req, res) => {
    res.sendFile(__dirname + '/script/db.js')
})





//rodar o servidor
app.listen(3000, () => {
    console.log('servidor web iniciado na porta 3000! https:/localhost:3000')
});

module.exports = app;
