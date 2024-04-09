exports.getAddNewStudentPage = (req, res) => {
  res.render('Home', { title: 'Add new student' });
};
exports.getStudentsListPage = (req, res) => {
  res.render('List', { students: students, pageTitle: 'List' });
};
  

let students = [];
let nextId = 1;

exports.addStudent = (req, res) => {
  const newStudent = {
    id: nextId,
    name: req.body.name,
    code: req.body.code,
    fieldOfStudies: req.body.fieldOfStudies
  };

  students.push(newStudent);
  nextId++;
  res.redirect('/success');
};

exports.getSuccessPage = (req, res) => {
  res.render('Success');
};



