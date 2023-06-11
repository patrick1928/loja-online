const Express = require('express');
const app = new Express();
const PORT = 3000;
//caminhos
//arquivos html
app.get('/index.html' , (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/accont.html', (req, res)=> {
    res.sendFile(__dirname + '/accont.html')
})

//arquivos css
app.get('/css/style.css', (req, res)=> {
    res.sendFile(__dirname + '/css/style.css')

})

// arquivos js
app.get('/src/index.js' , (req, res) => {
    res.sendFile(__dirname + '/src/index.js')
})

app.listen(PORT , (req, res) => {
    console.log(`servidor rodando no ${PORT}`);
})