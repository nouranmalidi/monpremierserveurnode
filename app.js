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

// J'ajoute un middleware qui gère la sécurité d'acces
app.use((req,res,next) => {
    // Je permet l'accès à mon API depuis n'importe quel origine avec (*) qui veut dire tout le monde
    res.setHeader('Access-Control-Allow-Origin','*');
   
   // J'autorise certaines en-têtes dans les rêquetes reçues dans nottre API. Lees en-têtes autorisées 
   // sont : 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
    res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
   // J'autorise d'envoyer des requêtes avec les méthodes : 'GET, POST, PUT, DELETE, PATCH, OPTIONS'
    res.setHeader('Access-Control-Allow-Method', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
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
        },
        {
            id: 2,
            nom: "orange",
            description: "originaire d'afrique du sud, produit en agriculture bio",
            prix: 2.5
        }
    ];

    // En terme de réponse, je renvoie le tableau de fruits
    res.status(200).json(fruit);

});



// J'exporte l'application express, ainsi l'app peut être importée dans d'autres fichiers JS.
module.exports = app;