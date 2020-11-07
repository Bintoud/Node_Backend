const express = require('express');
//const express = require('process');
const app = express();


// pour faire une route
/*
app.get('/', () => { // méthode get qui “écoute” les requête GET faites sur le serveur à la page '/'et qui exécutera le callback. Ce callback reçoit 2 paramètres req et res
  console.log('salut je suis la premiere route')
})
// le résultat est que dans mon terminal j'ai bien 'salut je suis la premiere route'
// et que coter page web j'ai le localhost qui continue de charger sans rien afficher
// car là je déclare seulement l'information (ds le console log) mais je ne retourne pas d'info
*/


// pour retourner de l'info on écrire en para req = requête  ; res = result ; next 

app.get('/', (req, res, next) => {
  console.log('salut je suis la premiere route')
  res.send('je suis dans ma deuxieme route');
});
// 1 : la function de callback vas s'excuter  dès qu'on app et entre dans le get.
// 2: dès que le code rencontre res.send il revoyer l'info au navigateur puis il va l' afficher.

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });