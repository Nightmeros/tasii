// let cors = require("cors");
// const db = require("./db") 
// app.use(cors());
let express = require("express");
const sequelize = require('./database')
const Aluno = require('./models/Alunos');

let app = express();
app.use(express.json());

const PORT = 3002;

app.get('/alunos', async (req, res) => {
    try {
        const aluno = await Aluno.findAll();
        res.status(200).json(aluno);
    } catch (err) {
        console.error(err)
        res.status(500).json(
            {
                mensagem: "Erro no servidor"
            }
        )
    }
})

app.post('/alunos', async (req, res) => {
    const nome = req.body.nome;
    try {
        const aluno = await Aluno.create({ nome })
        res.status(201).json(aluno)
    } catch (err) {
        console.error(err)
        res.status(500).json(
            {
                mensagem: "Erro no servidor"
            }
        )
    }
})

app.get('/alunos/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const aluno = await Aluno.findByPk(id);
        if (!aluno) {
            return res.status(404).json({ erro: "Aluno não encontrado" })
        }
        res.status(500).json(aluno)
    } catch (err) {
        console.error(err)
        res.status(500).json(
            {
                mensagem: "Erro no servidor"
            }
        )
    }
})





/// SEM ORM

// let usuarios = [
//   { id: 1, nome: "claudinei" },
//   { id: 2, nome: "rodisnei" }
// ]

// app.post('/alunos', (req, res) => {
//   const { nome, email, nota1, nota2 } = req.body;
//   if (!nome || !email || nota1 == null || nota2 == null) {
//     return res.status(400).json({ err: "Campos obrigatórios não preenchidos" })
//   }

//   if(isNaN(nota1) || isNaN(nota2)){
//     return res.status(400).json({ err: "As notas devem ser números" })
//   }

//   const notaFinal = (parseFloat(nota1)) + (parseFloat(nota2));
//   const status = notaFinal >= 6 ? "Aprovado" : "Reprovado";
//   const sql = "INSERT INTO alunos (nome, email, nota1, nota2, notaFinal, status) values (?, ?, ?, ?, ?, ?)"

//   db.query(sql, [nome, email, nota1, nota2, notaFinal, status], (err, result) => {
//     if (err) {
//       return res.status(500).json({ err: err.message })
//     }
//     res.status(200).json({
//       id:result.insertId,
//       nome,
//       notaFinal,
//       status
//     })
//   })
// })

// app.get('/usuarios',(request, response)=>{
//  let id = request.body.id
//  let nome = request.body.nome;
//  response.status(202).json({"dados":usuarios})
// })

// app.get('/alunos', (req, res) => {
//   db.query("SELECT * FROM alunos", (err, result) => {
//     if (err) {
//       return res.status(500).json({ erro: err.message });
//     }
//     res.json(result);
//   });
// });


app.listen(PORT, function (params) {
    console.log(`Server funando na porta ${PORT}`)
})