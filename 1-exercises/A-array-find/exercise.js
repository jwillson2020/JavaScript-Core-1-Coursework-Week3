/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

var names = [
  "Rakesh",
  "Antonio",
  "Alexandra",
  "Andronicus",
  "Annam",
  "Mikey",
  "Anastasia",
  "Karim",
  "Ahmed",
];

//function findLongNameThatStartsWithA(name) {
 // return name.length > 6;  returns the length of name, true 
// for (var i = 0; i < name.length; i += 1) {

  
 

//if (name[i].length > 7 ) {    /// using find  is not good  
//return (name)[i];
//} } }


function findLongNameThatStartsWithA(names) {
return names.find(name => name.startsWith("A") && name.length > 7);
}

var longNameThatStartsWithA = findLongNameThatStartsWithA(names);

console.log(longNameThatStartsWithA);

/* EXPECTED OUTPUT */
// "Alexandra"
