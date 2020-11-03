const express = require('express');
const exphbs = require('express-handlebars');
const port = 3002;
const app = express();

const students = ['Bintou', 'D', 'Lovelace', 'Just somebody say just....' ]

app.engine('handlebars', exphbs ({
    defaultLayout: true, //false
    layoutsDir : __filename + "views/"  // ,__dirname
}));

app.set('view engine', 'handlebars');

app.get('/handlebars', (req, res, next) => {
    console.log(students[0])
    res.render('home', {students:('Add')
    })
})

app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
})
