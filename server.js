const express = require('express');
const sequelize = require('./script/db');
const app = express();
app.use(express.static('public'));

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

//arquivos html!!
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/accont', (req, res) => {
    res.sendFile(__dirname + '/accont.html');


//arquivos css!!
});
app.get('/css/style', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');

    //imagens
});
app.get('/imagens', (req, res) => {
    res.sendFile(__dirname + '/imagens/tecladoGamer.jpg')
})

//arquivos js
app.get('/script/index', (req, res) => {
    res.sendFile(__dirname + '/script/index.js')
})
//arquivos nodejs
app.get('/script/db', (req, res) => {
    res.sendFile(__dirname + '/script/db.js')
})

app.post('/script/queryUser',(req, res) => {
     const{ email, senha} = req.body;
     res.send(email)
})



//rodar o servidor
app.listen(3000, () => {
    console.log('servidor web iniciado na porta 3000!')
});