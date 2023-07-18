console.log('Olá, mundo!');

http.createServer((requisicao, resposta) => {
    resposta.writeHead(200, {
        'Content-Type' : 'text/plain'
    });
    resposta.write('Márcio Server\n');
    resposta.end();
}).listen(1337);

