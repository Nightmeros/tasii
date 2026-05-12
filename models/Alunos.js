const { DataTypes } = require('sequelize')
const sequelize = require('../database')

const Aluno = sequelize.define('Aluno', {
    nome:{
        type: DataTypes.STRING,
        allowNull:false
    }
},
{
    timestamps:false
}
)

module.exports = Aluno;