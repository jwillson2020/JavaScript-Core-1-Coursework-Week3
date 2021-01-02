/*
  You are given a program that logs pairings between mentors and students
  It fails because the array `pairsById` can contain different values that break the program
  It is decided that array items which are not pairs should be filtered out
  - Finish the statement on line 11 to produce an array with valid content
  - Do not edit any of the existing code
*/

//if (!Array.isArray) {
  //Array.isArray = function(arg) {
   // return Object.prototype.toString.call(arg) === '[object Array]';
  //};
//}

var pairsByIndexRaw = [[0, 3], [1, 2], [2, 1], null, [1], false, "whoops"];

var pairsByIndex = pairsByIndexRaw.filter(elem => null !== elem && elem.length === 2); // pairs student and mentors

// [0,3]  = ['Islam', 'Luke']

//elem.length === 2
//'null' != elem
//&& elem.isArray([])

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];



var pairs = pairsByIndex.map(function (indexes) {
  var student = students[indexes[0]];
  var mentor = mentors[indexes[1]];
  return [student, mentor];
});

console.log(pairs);
