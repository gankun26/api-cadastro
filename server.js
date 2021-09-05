const http = require('http');
const app = require('./app');
const port = process.env.PORT || 3000;
const server = http.createServer(app);

//Servidor funcionando
server.listen(port, function(){
    console.log('tudo certo!')
});



