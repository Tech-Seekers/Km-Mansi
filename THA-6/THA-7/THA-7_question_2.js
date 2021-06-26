var student =  { 
    name : "Km Mansi", 
    year : "3rd year", 
    rollno : 180291  };
  console.log(student);
  delete student.rollno;
  console.log(student);
  var objsize = Object.objsize(student);
console.log('Size of the current object : '+objsize);