
const express = require('express');
const { report } = require('process');
const app = express();



///// part 1
app.get('/', (req, res) => {
    res.send('Beautiful homepage');
  });

//// part 2
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});

app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});



///// part 3

// Routes
app.get('/', (req, res) => {
  res.send('Beautiful homepage');
});
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});



//// part 4
app.get('/bonjour/:pedro', (req, res) => {
    res.send(`Bonjour ${req.params.name} !`);
});

//// part 5
app.get('/bonjour/:pedro/age/:18', (req, res) => {
    res.send(`Bonjour ${req.params.name} ! Tu as ${req.params.age} ans.`);
});


//// part 6
app.get('*', function(req, res) {
    res.send('All routes - Erreur 404');
});


//// part 7
// Routes
app.get('/', (req, res) => {
  res.send('Beautiful homepage');
});
app.get('/hello', (req, res) => {
    res.send('Hello world!');
});
app.get('/hola', (req, res) => {
    res.send('Hola todos !');
});
app.get('/bonjour/:name', (req, res) => {
    res.send(`Bonjour ${req.params.name} !`);
});
app.get('/bonjour/:name/age/:age', function(req, res) {
    res.send(`Bonjour ${req.params.name} ! Tu as ${req.params.age} ans.`);
});
app.get('*', (req, res) => {
    res.send('All routes');
});

// Run server
const port = 3000;
app.listen(port, () => {
  console.log('Server started on port: ' + port);
});