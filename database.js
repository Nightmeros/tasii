const { Sequelize } = require('sequelize')

const sequelize = new Sequelize(
    "escola",
    "root",
    "root",
    {
        host: "localhost",
        dialect: "mysql",

    }
);

sequelize.sync().then(() => {
    console.log("deu bom")
}).catch(err => console.log(err))

module.exports = sequelize;