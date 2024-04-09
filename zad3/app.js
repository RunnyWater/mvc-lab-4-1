const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
app.set('views', path.join(__dirname, '/views'))

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Home');
});

app.get('/success', (req, res) => {
    res.render('Success');
});

app.get('/students-list', (req, res) => {
    res.render('List');
});

app.post('/add-student', (req, res) => {
    app.post('/add-student', studentsController.addStudent);
    res.redirect('/success');
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});

const errorController = require(path.join(__dirname,'./controllers/error'));
const studentsController = require(path.join(__dirname, './controllers/students'));

app.use(errorController.getNotFoundPage);

