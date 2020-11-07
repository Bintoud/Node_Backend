const express = require ('express');
const { report } = require('process')
const app = express();


    const authors = [
        {
            Name : 'Lawrence Nowell',
            Nationnality : 'UK',
            Books : 'Beowulf'
        },
        {
            Name : 'William Shakespeare',
            Nationnality : 'UK',
            Books : 'Hamlet, Othello, Romeo and Juliet, MacBeth'
        },
        {
            Name : 'Charles Dickens',
            Nationnality : 'US',
            Books : 'Oliver Twist, A Christmas Carol'
        },
        {
            Name : 'Oscar Wilde',
            Nationnality : 'UK',
            Books : 'The Picture of Dorian Gray, The Importance of Being Earnest'
        },
        {
            Cars : 'The author with the ID 12133 does not exist'
        }   
    ]
 
    /*
    app.get('/authors/1/books', (req, res) => {
        authors 
        res.send(authors[1].Books)
    });
    app.get('/authors/2/books', (req, res) => {
        authors
        res.send(authors[2].Books)
    });
    app.get('/authors/3/books', (req, res) => {
        authors
        res.send(authors[3].Books)
    });
    app.get('/authors/4/books', (req, res) => {
        authors
        res.send(authors[4].Books)
    });
    app.get('/authors/5/cars', (req, res) => {
        authors
        res.send(authors[5].Cars)
    });
   */

  app.get('/Authors/4/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[0])
});

app.get('/Authors/3/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[1])
});

app.get('/Authors/2/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[2])
});

app.get('/Authors/1/books', (req, res, next) => {
    console.log('req', req)
    console.log('res', res)
    res.send(Authors[3])
});

const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port: ${port}`);
  });


