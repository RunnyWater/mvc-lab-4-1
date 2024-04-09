const path = require('path');
const viewPath = path.join(__dirname, '/views')
exports.getAddNewStudentPage = (req, res) => {
  res.render(path.join(viewPath,'Home'), { title: 'Add new student' });
};
exports.getStudentsListPage = (req, res) => {
  console.log(path.join(viewPath, 'List'))
  res.render(path.join(viewPath, 'List'), { students: students });
};
  

let students = [];
let nextId = 1;

exports.addStudent = (req, res) => {
  const newStudent = {
    id: nextId,
    fullName: req.body.fullName,
    code: req.body.code,
    fieldOfStudies: req.body.fieldOfStudies
  };
  students.push(newStudent);
  nextId++;
  res.redirect('/success');
};
