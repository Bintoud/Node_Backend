const express = require ('express');
const { report } = require('process')
const app = express();


app.get('/json/authors/:id/', (req, res) => {
    const id = req.params.id;

    if (id > authorsBooks.length) {
        res.send(`The author with the ID ${id} does not exist`);
    } else {
        const { name, nationality } = authorsBooks[id - 1]

        res.json({
            name,
            nationality
        });
    }
});

/*
app.get('/json/authors/:id/books', (req, res) => {
    const id = req.params.id;

    if (id > authors.length) {
        res.send(`The author with the ID ${id} does not exist`);
    } else {
        const { books } = authorsBooks[id - 1]

        res.json({books});
    }
});
*/

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });