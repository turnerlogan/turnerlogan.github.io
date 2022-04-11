const quoteButton = document.querySelector('#js-new-quote');

quoteButton.addEventListener('click', loadData);

const endpoint = 'https://api.quotable.io/random';
const endpointImage = 'https://picsum.photos/600/800';

function loadData(){
  getQuote(endpoint);
  getImage(endpointImage);
}

async function getQuote(endpoint){
  console.log("quote button was clicked");
  try{
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayQuote(json.content);
  } catch(err){
    console.log(err)
    // alert('Failed');
  }
}

async function getImage(endpointImage){
  console.log("quote button was clicked");
  try{
    const response = await fetch(endpointImage);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    console.log(response.url);

    // const json = await response.json();
    // console.log(json);
    displayImage(response.url);
  } catch(err){
    console.log(err)
    // alert('Failed');
  }
}

function displayQuote(content){
  const quoteText = document.querySelector('#js-quote-text');
  quoteText.textContent = content;
}

function displayImage(image){
  const quoteImage = document.querySelector('#js-quote-image');
  quoteImage.src = image;
}
