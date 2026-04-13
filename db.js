const mysql = require("mysql2")

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"root",
    database:"escola"
})

connection.connect((erro)=>{ 
    if(erro){
        console.error("deu rui no banco")
    }
    console.log("deu bom")
});

module.exports = connection;