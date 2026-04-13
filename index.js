let express = require("express");
let cors = require("cors");
const db = require("./db")
let app = express();
app.use(express.json());
app.use(cors());

const PORT = 3002;

let usuarios = [
    {id:1,nome:"claudinei"},
    {id:2,nome:"rodisnei"}
]

app.get('/usuarios',(request, response)=>{
    response.status(202).json({"dados":usuarios})
})

app.post('/usuarios',(req, res)=>{
    const nome = req.body.nome;

    const novouser = {
        id:usuarios.length+1,
        nome: nome
    }

    usuarios.push(novouser)
    console.log(nome)
    console.log(usuarios)
    res.json({'nome enviado ':nome, 'users':usuarios})
})

app.listen(PORT, function (params) {
    console.log(`Server funando na porta ${PORT}`)
})