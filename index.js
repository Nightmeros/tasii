let express = require("express");
let app = express();
const PORT = 3002;

let usuarios = [
    {id:1,nome:"claudinei"},
    {id:2,nome:"rodisnei"}
]

app.get('/usuarios',(request, response)=>{
    response.status(202).json(usuarios)
})

app.listen(PORT, function (params) {
    console.log(`Server funando na porta ${PORT}`)
})