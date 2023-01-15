const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
}
// loadMeals('a')
const displayMeals = (meals) => {
    const mealsCon = document.getElementById("meals-con")
    mealsCon.innerHTML = ``
    meals.forEach(meal => {
        const mealDiv = document.createElement("div")
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div  class="card h-100 p-5">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body bg-waring">
            <h5 class="card-title">Meal Name: ${meal.strMeal}</h5>
            <h6 class="card-text">Meal Name: ${meal.strCategory}</h6>
            <h6 class="card-text">Meal Origin: ${meal.strArea}</h6>
            <p class="card-text">Instructions: ${meal.strInstructions.slice(0, 200)}..</p>
            <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-info">Details</button>
        </div>
        `
        mealsCon.appendChild(mealDiv);

    });
};
const searchIt = () => {
    const inputValue = document.getElementById('input');
    const value = inputValue.value
    loadMeals(value)
    inputValue.value = ""

};

const mealDetails = (idMeal) => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
    console.log(url)
    fetch(url)
        .then(response => response.json())
        .then(data => loadMealDetail(data.meals[0]))
};

const loadMealDetail = meal => {
    const mealsCon = document.getElementById("meals-display")
    mealsCon.innerHTML = ``
    const mealDiv = document.createElement("div")
    mealDiv.classList.add('col')
    mealDiv.innerHTML = `
        <div  class="align-center text-center card w-50 h-100 p-5">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body bg-waring">
            <h5 class="card-title">Meal Name: ${meal.strMeal}</h5>
            <h6 class="card-text">Meal Name: ${meal.strCategory}</h6>
            <h6 class="card-text">Meal Origin: ${meal.strArea}</h6>
            <p class="card-text">Instructions: ${meal.strInstructions.slice(0, 200)}..</p>
            <button onclick="mealDetails(${meal.idMeal})" type="button" class="btn btn-info">Details</button>
        </div>
        `
    mealsCon.appendChild(mealDiv);
    console.log(meal);

}


