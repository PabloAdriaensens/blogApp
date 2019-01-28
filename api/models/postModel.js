const Sequelize = require('sequelize');
const Conn = require('../../config/sequelizeConf').getConnection();
//aquí usamos el método getConnection para que nos devuelva directamente el objeto

const Posts = Conn.define('posts',{
    title:{
        type:Sequelize.STRING
    },
    body:{
        type: Sequelize.STRING
    }
});

module.exports = Posts;
