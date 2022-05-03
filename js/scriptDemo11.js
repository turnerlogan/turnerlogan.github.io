/* const para = document.querySelector('p');

para.addEventListener('click', updateName);

function updateName () {
  const name = prompt('Enter a new name');
  para.textContent = `Player 1: ${name}`;
} */

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'Mozilla is cool, ' + myName;
}

//error catcher if no name is input
if(!localStorage.getItem('name')){
  setUserName();
  }
  else{
    let storedNAme = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }

myButton.oncick = function() {
  setUserName();
}
