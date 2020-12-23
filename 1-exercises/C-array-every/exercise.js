/*
   This program should check if the array `group` contains only students
*/

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];
let studentsInGroup = students.localeCompare(group);
//const isBelowThreshold = (currentValue) => currentValue < 40;
//function isStudents(name) {
  //return 
//}


var groupIsOnlyStudents = students.every(studentsInGroup); // complete this statement

if (groupIsOnlyStudents) {
  console.log("The group contains only students");
} else {
  console.log("The group does not contain only students");
}

/* EXPECTED RESULT */

// The group does not contain only students
