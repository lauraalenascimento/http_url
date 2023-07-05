const http = require('http')
const PORT = 3000

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"context-type":"text/html"})
    res.end('Olá Mundo')
})
server.listen(PORT,()=>{
    console.log(`servido rodando na porta ${PORT}`)
})