// WRITE YOUR CODE HERE

// var lastItem = student[student.length -1];
// prints out the number of students starting from 0
// console.log(student.length)


var student = ['kevin','marta','kieran','adam','hugh','sarah','jane','fred','evie'];
var welcomeQuote = 'Welcome to the class'
var spacer = ' '
var original = student[0];


//console log total number of item in an array
console.log(student.length);


console.log(welcomeQuote + spacer + student[0]);
console.log(welcomeQuote + spacer + student[1]);
console.log(welcomeQuote + spacer + student[2]);
console.log(welcomeQuote + spacer + student[3]);

student[0] = 'dave';

console.log(student)

if (student[0] != original) {
    console.log(student[0] + spacer + 'is in class')
}




// console.log('Welcome to the class ' + student[0]);

// student[0] = 'kevin'

// console.log('welcome to the class ' + student[5]);
// console.log('welcome to the class ' + student[1]);
// console.log('welcome to the class ' + student[2]);

// if (student[0] === 'dave') {
//     console.log(true)
// }







//student[0] = 'tom';

// student.pop();
// student.shift()

// console.log (student[student.length -1]);