const express = require('express');
const app = express();

app.use(express.static('public'));



app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/accont', (req, res) => {
    res.sendFile(__dirname + '/accont.html');
});
app.get('/css/style', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});
app.listen(3000, () => {
    console.log('servidor web iniciado na porta 3000!')
});