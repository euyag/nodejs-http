const http = require('http')

const server = http.createServer((req, res) => {
    const resp = []
    resp['/'] = '<h1>Home</h1>'
    resp['/contato'] = '<h1>contado</h1>'
    resp['sem url'] = '<h1>url sem resposta definida</h1>'

    res.end(resp[req.url] || resp['sem url'])
})

server.listen(3001, 'localhost', () => {
    console.log('servidor de pe em: http://localhost:3001')
    console.log('paara desligar o nosso servidor: ctrl + c')
})
