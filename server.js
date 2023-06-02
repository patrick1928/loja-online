const express = require('express');
const app = express();

const phpExpress = require('php-express');
const phpExpressEngine = phpExpress({
    binPath: 'php'
});

app.use(express.static('public'));
app.set('views', './views')
app.engine('php', phpExpressEngine);
app.set('view engine', 'php');

app.all(/\.php$/, phpExpressEngine);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});
app.get('/accont', (req, res) => {
    res.sendFile(__dirname + '/accont.html');
});
app.get('/css/style', (req, res) => {
    res.sendFile(__dirname + '/css/style.css');
});
app.get('/imagens', (req, res) => {
    res.sendFile(__dirname + '/imagens/tecladoGamer.jpg')
})
app.listen(3000, () => {
    console.log('servidor web iniciado na porta 3000!')
});