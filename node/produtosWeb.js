var http = require('http');
var server = http.createServer(function(req, res){
    if (req.url == "/produtos"){
        res.end("<html><body><h1>Listando produtos</h1></body></html>");
    }else{
        res.end("<html><body><h1>Home</h1></body></html>");
    }

})
server.listen(3000);
console.log("Servidor rodando");
