let myButton = document.querySelector('button');

function buttonResponse(){
  alert('Hey! Do not click me!');
}

myButton.mouseover = function() {
  buttonResponse();
}

document.querySelector('button').addEventListener('mouseover',
function(){
  alert('Hey! Do not click me!');
});



const para = document.querySelector('p');

para.addEventListener('click', destinationGuess);

function destinationGuess () {
  let destination = 'Miami';
  if(destination === 'Miami'){
    alert('Yes! It was so fun!');
  }
  else{
    alert('Not quite, try again. Hint: It is a city in south Florida.');
  }
}
