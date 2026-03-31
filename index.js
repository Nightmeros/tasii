let express = require("express");
let app = express();
const PORT = 3000;

app.get('/', function (req, res) {
    res.send("home")
})
app.get('/produtos', (req, res)=> {
    res.send("PRODUTO 1")
})

app.route('/books')
        .get(function (params) {
            res.send("get book")
        })
        .post(function () {
             res.send("Cad livro")
        }).

app.listen(PORT, function (params) {
    console.log(`Server funando na porta ${PORT}`)
})