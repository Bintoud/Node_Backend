const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const port = 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.post('/form/signup', (req, res) => {
    res.redirect('/home')
});

app.engine('handlebars', exphbs({
    defaultLayout: false,
    layoutsDir:__dirname + "views"
}));

app.set('view engine', 'handlebars');

app.get('/handlebars', function (req, res, next) {
    res.render('home', { title : 'Bintou D Lovelace'})
});

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
