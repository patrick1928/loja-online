const express = require('express');
const app = express();

app.use(express.static('public'));


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

//rodar o servidor
app.listen(3000, () => {
    console.log('servidor web iniciado na porta 3000!')
});