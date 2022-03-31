document.querySelector('button').addEventListener('button',
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
