const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');


const errorController = require(path.join(__dirname, './controllers/error'));
const studentsController = require(path.join(__dirname, './controllers/students'));


app.set('views', path.join(__dirname, '/views'))

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.render('Home', { pageTitle: 'Home' });
});


app.get('/success', (req, res) => {
    res.render('Success', { pageTitle: 'Success' });
});

app.get('/students-list', studentsController.getStudentsListPage);
// app.get('/students-list', (req, res) => {
//     // res.render('List', {pageTitle: 'List' });
// });


app.post('/add-student',studentsController.addStudent);
// res.redirect('/success');
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});


app.use(errorController.getNotFoundPage);
