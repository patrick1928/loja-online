const Sequelize = require('sequelize');
const sequelize = new Sequelize('dbpatrick', 'root', '', {
    host:'localhost',
    dialect:'mysql'
});
sequelize.authenticate().then(() => {
    console.log('conectado com sucesso')
}).catch(() => {
    console.log('não foi possivel estabelecer uma conexão!')
});

module.exports = sequelize;
