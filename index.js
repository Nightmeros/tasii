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
  const { nome, email, nota1, nota2 } = req.body;
  if (!nome || !email || nota1 == null || nota2 == null) {
    return res.status(400).json({ err: "Campos obrigatórios não preenchidos" })
  }

  if(isNaN(nota1) || isNaN(nota2)){
    return res.status(400).json({ err: "As notas devem ser números" })
  }

  const notaFinal = (parseFloat(nota1)) + (parseFloat(nota2));
  const status = notaFinal >= 6 ? "Aprovado" : "Reprovado";
  const sql = "INSERT INTO alunos (nome, email, nota1, nota2, notaFinal, status) values (?, ?, ?, ?, ?, ?)"

  db.query(sql, [nome, email, nota1, nota2, notaFinal, status], (err, result) => {
    if (err) {
      return res.status(500).json({ err: err.message })
    }
    res.status(200).json({
      id:result.insertId,
      nome,
      notaFinal,
      status
    })
  })
})

// app.get('/usuarios',(request, response)=>{
//  let id = request.body.id
//  let nome = request.body.nome;
//  response.status(202).json({"dados":usuarios})
// })

app.get('/alunos', (req, res) => {
  db.query("SELECT * FROM alunos", (err, result) => {
    if (err) {
      return res.status(500).json({ erro: err.message });
    }
    res.json(result);
  });
});


app.listen(PORT, function (params) {
  console.log(`Server funando na porta ${PORT}`)
})