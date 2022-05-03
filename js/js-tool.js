//https://www.thecocktaildb.com/api.php
//https://www.themealdb.com/api.php
//https://www.boredapi.com

const planButton = document.querySelector('#js-new-plan');

planButton.addEventListener('click', loadData);

const endpointDrink = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const endpointMeal = 'https://www.themealdb.com/api/json/v1/1/random.php';
const endpointActivity = 'https://www.boredapi.com/api/activity/'

function loadData(){
  getDrink(endpointDrink);
  getMeal(endpointMeal);
  getActivity(endpointActivity);
}

async function getDrink(endpointDrink){
  console.log("the button was clicked");
  try{
    const response = await fetch(endpointDrink);
    if (!response.ok) {
      throw Error(response.statusText)
    }

    const json = await response.json();
    console.log(json);
    displayDrink(json.drinks[0].strDrink);
    displayDrinkImage(json.drinks[0].strDrinkThumb);
  } catch(err){
    console.log(err)
    // alert('Failed');
  }
}

async function getMeal(endpointMeal){
  console.log("the button was clicked");
  try{
    const response = await fetch(endpointMeal);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);

    displayMeal(json.meals[0].strMeal);
    displayMealImage(json.meals[0].strMealThumb);
  } catch(err){
    console.log(err)
    // alert('Failed');
  }
}

async function getActivity(endpointActivity){
  console.log("the button was clicked");
  try{
    const response = await fetch(endpointActivity);
    if (!response.ok) {
      throw Error(response.statusText)
    }
    const json = await response.json();
    console.log(json);

    displayActivity(json.activity);
  } catch(err){
    console.log(err)
    // alert('Failed');
  }
}

function displayDrink(strDrink){
  const drinkText = document.querySelector('#js-drink-text');
  drinkText.textContent = strDrink;
}

function displayDrinkImage(strDrinkThumb){
  const drinkImage = document.querySelector('#js-drink-image');
  drinkImage.src = strDrinkThumb;
}

function displayMeal(strMeal){
  const mealText = document.querySelector('#js-meal-text');
  mealText.textContent = strMeal;
}

function displayMealImage(strMealThumb){
  const mealImage = document.querySelector('#js-meal-image');
  mealImage.src = strMealThumb;
}

function displayActivity(activity){
  const activityText = document.querySelector('#js-activity-text');
  activityText.textContent = activity;
}
