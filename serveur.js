// Ici je vais codder mon serveur
// require ressemble a import pour importer un module. 
// Le module HTTP est stocké dans la variable http.

const http = require('http');     

// J'importe l'application express app.js
const app = require('./app');

// Je configure le numéro du port utilisé dans le serveur
app.set('port', 3000);


// Maintenant je créer mon serveir en utilisant le package HTTP

const server = http.createServer(app)

/*
const server = http.createServer((req, res) => {
    res.end("Bonjour, je suis le serveur!");
}); */

const date = new Date();


// Je précise le port 
server.listen(3000, () => {
    console.log("Le serveur tourne sur le port 3000.");
    console.log(date.toLocaleDateString());
    console.log(`Il est ${date.getHours()} heure`);
});   // Le serveur est disponible au port 3000

