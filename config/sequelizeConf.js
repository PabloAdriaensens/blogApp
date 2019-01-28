const Sequelize = require('sequelize');

class SequelizeConf{
    static getConnection(){
        return new Sequelize('blogApp', 'appUser', 'ASDFGqwert12345',{
            host: 'localhost',
            dialect:'mysql',
            pool:{
                max:5,
                min:0,
                idle:10000
            }
        })
    }
}

module.exports = SequelizeConf;
