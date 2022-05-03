// document.querySelector('button'); use element/type
// document.querySelector('.new-quote button'); use class
// document.querySelector(#js-new-quote'); use id, this is preferred bc it is most specific

const factButton = document.querySelector('#js-new-quote');

factButton.addEventListener('click', getFact);

function getFact(){
  console.log("fact button was clicked");
  try{
    const response = await fetch(endpoint);
    if (!resonse.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayFact(json.fact);
  } catch(err){
    console.log(err)
    alert('Failed');
  }
}

function displayFact(fact){
  const factText = document.querySelector('#js-quote-text');
  factText.textContent = fact;
}

const endpoint = 'https://catfact.ninja.fact';
