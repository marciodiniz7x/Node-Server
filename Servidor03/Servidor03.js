const http = require('http');
const porta = 3000;
const host = '127.0.0.1';

const servidor = http.createServer((require, response) => {
    response.writeHead(200, {'Content-Type' : 'text/html'});
    if (require.url == '/') {
        response.write('<h1> Seja bem vindo</>');
    } else if (require.url == "/canal") {
        response.write('<h1>CBF Cursos</h1>');
    } if (require.url == '/curso') {
        response.write('<h1>Curso de Node</h1>');
    }
    response.end();

});

servidor.listen(porta, host, () => {console.log('Servidor rodando')});