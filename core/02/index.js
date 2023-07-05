const http = require ('http')

const PORT = 1500



const server = http.createServer((req,res)=>{

    if(req.url ==='/home'){
        res.writeHead(200,{"context-type":"text/html"})
        res.end('Bem-Vindo á Página Principal')

    }else if (req.url === '/about'){
        res.writeHead(200,{"context-type": "text/html"})
        res.end('Sobre Nós: Somos ums empresa dedicada a sport')
    }
  
})

server.listen(PORT,()=>{
    console.log(`servidor rodando na porta ${PORT}`)
})