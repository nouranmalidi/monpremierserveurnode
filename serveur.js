// Ici je vais codder mon serveur

const http = require('http');         // require ressemble a import pour importer un module. 
// Le module HTTP est stocké dans la variable http.

// Mintenant je créer mon serveir en utilisant le package HTTP
const server = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur!");
});

// Je précise le port 
server.listen(3000);   // Le serveur est disponible au port 3000