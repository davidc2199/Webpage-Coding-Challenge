let meals = []

 const getInputValue = (ev) => {
    ev.preventDefault();

    // Obtain values that user submitted
    var inputMeal = document.getElementById("meals").value;
    var inputFruit = document.getElementById("fruits").value;

    let mealChoice = {
        meal: inputMeal,
        fruit: inputFruit
    }

    // Add meal choice to array of meals chosen so far
    meals.push(mealChoice)
    document.querySelector('form').reset()

    // Add to existing array in localStorage
    localStorage.setItem("mealHistory", JSON.stringify(meals))
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById('submit').addEventListener('click', getInputValue);
})

function getPopularFruit(){
    // Retrieve stored data from localStorage on browser
    var storedData = JSON.parse(localStorage.getItem("mealHistory"))
    var mealChosen = document.getElementById("meals").value;
    var fruitArray = []

    // Add up the total counts of each fruit so far for chosen meal
    for (let i = 0; i < storedData.length; i++) {
        if (storedData[i].meal == mealChosen) {
            // If the fruit exists in the fruitArray, increase its count, otherwise add fruit to array
            if (typeof fruitArray.find(f => f.fruit === storedData[i].fruit) != "undefined") {
                let currFruit = fruitArray.find(f => f.fruit === storedData[i].fruit)
                currFruit.count++
            } else {
                let meal = {
                    "fruit": storedData[i].fruit,
                    "count": 1
                }
                fruitArray.push(meal)
            }
        }
    
    // Find most chosen fruit so far
    let tempMax = 0;
    let tempFruit = fruits.options[0]
    for (let i = 0; i < fruitArray.length; i++) {
        if (fruitArray[i].count > tempMax) {
            tempMax = fruitArray[i].count
            tempFruit = fruitArray[i].fruit
        }

    }
    var defaultFruit = document.getElementById("fruits");

    // Set the default value to most chosen fruit
    for(let i, j = 0; i = fruits.options[j]; j++) {
        if (i.value == tempFruit) {
            fruits.selectedIndex = j;
            break;
        }
    }
}
}
