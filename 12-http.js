const http = require('http');

const server = http.createServer((req,res)=>{
     if (req.url === '/'){
        res.end('welcome to our homepage')
        return
     }
     if(req.url==='/about'){
        res.end("here is our short history")
        return 
     }
     res.end(`
     <h1>  oops</h1>
     <p>we can't seem to fin the page you are looking for</p>
     <a href="/">back home</a> `)
     return 
})
server.listen(5000)