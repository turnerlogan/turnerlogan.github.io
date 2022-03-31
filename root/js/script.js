let para = document.querySelector('p').addEventListener('mouseover',
function(){
  alert('Hey! Do not click me!');
});



let button = document.querySelector('button').addEventListener('click', destinationGuess);

button.onclick = function destinationGuess () {
  let destination = prompt('Guess the location.');
  if(destination === 'Miami'){
    alert('Yes! It was so fun!');
  }
  else{
    alert('Not quite, try again. Hint: It is a city in south Florida.');
  }
}
