let express = require("express");
let cors = require("cors");
const db = require("./db")

let app = express();
app.use(express.json());
app.use(cors());

const PORT = 3002;

let usuarios = [
    { id: 1, nome: "claudinei" },
    { id: 2, nome: "rodisnei" }
]

app.post('/alunos', (req, res) => {
    const { nome } = req.body;
    const sql = "INSERT INTO ALUNOS (nome) values (?)"
    db.query(sql, [nome], function (err, result) {
        if (err) {
            return response.status(500).json({ err: err.message })
        }
        res.status(200).json({
            id:result.insertId,
            nome
        })
    })

})


// app.get('/usuarios',(request, response)=>{
//     let id = request.body.id
//     let nome = request.body.nome;
//     response.status(202).json({"dados":usuarios})
// })

app.get('/alunos', function (req,) {
    db.query("SELECT * FROM escola.alunos", (err, result) => {
        if (err) {
            return response.status(erro).json({ err: err.message })
        }
        res.json(result)
    })
})

app.post('/usuarios', (req, res) => {
    const nome = req.body.nome;

    const novouser = {
        id: usuarios.length + 1,
        nome: nome
    }

    usuarios.push(novouser)
    console.log(nome)
    console.log(usuarios)
    res.json({ 'nome enviado ': nome, 'users': usuarios })
})

app.listen(PORT, function (params) {
    console.log(`Server funando na porta ${PORT}`)
})