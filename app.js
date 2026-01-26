// Ici, nous créons nottre application EpressJS

// J'importe le framework ExpressJS
const express = require ('express');

// J'initialise une application express
const app = express();


// Je définis la route par défaut exemple : localhost: 3000 

app.use((req,res,next) => {
console.log("Je suis un middleware dans le serveur");
next(); // Pour indiquer de passer au middleware suivant
});



// J'utilise un Middleware 2 pour retourner la réponse au client lorsqu'il fait le rêquete localhost:3000.
app.use((req,res) => {
    res.json({message: "Vous êtes bien sur le serveur MALIDI"})
    // res.json envoie deja une réponse donc le 3 eme middleware ne s'afficherera pas
    
});

app.use((req,res) => {
    console.log("Bonjour, je suis le serveur!");
    // Pas de next () car c'est le dernier middleware
    // Le message ne s'affichera pas car y'a deja une reponse avec le middleware 2
});

// J'exporte l'application express, ainsi l'app peut être importée dans d'autres fichiers JS.
module.exports = app;