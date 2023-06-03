const app = require('../server');
app.post('/script/queryUser',(req, res) => {
    const{ email, senha} = req.body;
    res.send(email)
})