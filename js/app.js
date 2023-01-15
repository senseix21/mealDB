const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMeals(data.meals))
        .then(data => console.log(data))
}
// loadMeals('a')
const displayMeals = (meals) => {
    const mealsCon = document.getElementById("meals-con")
    mealsCon.innerHTML = ``
    meals.forEach(meal => {
        console.log(meal)
        console.log(meal.strMeal)
        const mealDiv = document.createElement("div")
        mealDiv.classList.add('col')
        mealDiv.innerHTML = `
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body bg-waring">
            <h5 class="card-title">Meal Name: ${meal.strMeal}</h5>
            <h6 class="card-text">Meal Name: ${meal.strCategory}</h6>
            <h6 class="card-text">Meal Origin: ${meal.strArea}</h6>
            <p class="card-text">Instructions: ${meal.strInstructions.slice(0, 200)}..</p>
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