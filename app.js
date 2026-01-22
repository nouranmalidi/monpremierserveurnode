// Ici, nous créons nottre application EpressJS

// J'importe le framework ExpressJS
const express = require ('express');

// J'initialise une application express
const app = express();


app.use((req,res) => {
    res.end("Bonjour, je suis le serveur!");
});

// J'exporte l'application express, ainsi l'app peut être importée dans d'autres fichiers JS.
module.exports = app;