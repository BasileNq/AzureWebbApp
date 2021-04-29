const http = require('http');
const url = require('url');

const res = () =>{

}
const server = http.createServer((request, response) => {
    const queryData = url.parse(request.url, true).query;
    response.writeHead(200, {"Content-Type": "text/html"});
    if (queryData.name){
        response.end("Salut " + queryData.name);
    } else {
        response.end("Quel est votre nom ?");
    }
    
});

const port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
