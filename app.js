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
/*
app.use((req,res,next) => {
    res.json({message: "Vous êtes bien sur le serveur MALIDI"});
       next();
});
*/

app.use((req,res,next) => {
    console.log("Bonjour, je suis le serveur!");
    next();
});

// Je dessine mes Routes avec Express 

app.use('/api/fruit', (req, res) => {
    console.log("Je passe dans la route /api/fruit")
    
    // Mon fruit
    const fruit = [
        {
            id: 1,
            nom: "pomme",
            description: "fruit saisonier riche vitamin C",
            prix: 3
        }
    ];

    // En terme de réponse, je renvoie le tableau de fruits
    res.json(fruit);

});



// J'exporte l'application express, ainsi l'app peut être importée dans d'autres fichiers JS.
module.exports = app;