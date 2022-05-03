let myVariable; //initiates variable
myVariable = 'Anthony';

let myVariable2 = 'Peter';

myVariable = 'Celine'; //reassigns myVariable value

/* This is a multi-line comment */
//This is single line comment

//VARIABLES

let myVariable = 'bob'; //STRINGS

let myNumber = 3; //NUMBERS

let myBoolean = true; //BOOLEANS
let myBoolean = false;

let myArray = [1, 'bob', true]; //ARRAYS (can have mixed types i.e. booleans, strings, and numbers)

let myObject = document.querySelector('p'); //OBJECTS, but all of the above are objects too



//OPERATORS

6 + 9; //ADDITION
'Hello' + 'World' //STRING ADDITIOM --> 'HelloWorld'

//SUBTRACTION --> -
//MULTIPLICATION --> *
//DIVISION --> /

//ASSIGNMENT --> =



//EQUALITY

myNumber === 4; // <-- returns boolean of false

// NOT, DOES NOT EQUAL
!(myNumber ===3); //exclamation mark means "not", !(TRUE) = FALSE
myVariable !== 3; //FALSE



//CONDITIONALS

let iceCream = 'chocolate'
if(iceCream === 'chocolate'){
  alert('Yay, I love chocolate ice cream!');
}
else{
  alert('Awwww, but chocolate is my favorite...');
}


//EVENT LISTENERS

document.querySelector('html').addEventListener('click',
function(){
  alert('Ouch! Stop poking me!');
});
