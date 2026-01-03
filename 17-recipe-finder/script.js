const recipes = [
    {
        name: "Spaghetti Carbonara",
        description: "Classic Italian pasta dish",
        ingredients: ["Spaghetti", "Eggs", "Bacon", "Parmesan", "Black Pepper"]
    },
    {
        name: "Chicken Curry",
        description: "Spicy and flavorful curry",
        ingredients: ["Chicken", "Curry Powder", "Coconut Milk", "Onions", "Garlic"]
    },
    {
        name: "Chocolate Cake",
        description: "Rich and moist chocolate cake",
        ingredients: ["Flour", "Cocoa Powder", "Sugar", "Eggs", "Butter", "Milk"]
    },
    {
        name: "Caesar Salad",
        description: "Fresh and crisp salad",
        ingredients: ["Romaine Lettuce", "Caesar Dressing", "Croutons", "Parmesan", "Lemon"]
    },
    {
        name: "Beef Tacos",
        description: "Delicious Mexican tacos",
        ingredients: ["Ground Beef", "Tortillas", "Lettuce", "Tomatoes", "Cheese", "Sour Cream"]
    }
];

const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const recipesGrid = document.getElementById('recipes');

function displayRecipes(filteredRecipes) {
    recipesGrid.innerHTML = '';
    
    if (filteredRecipes.length === 0) {
        recipesGrid.innerHTML = '<p style="text-align:center; color:#666;">No recipes found.</p>';
        return;
    }
    
    filteredRecipes.forEach(recipe => {
        const card = document.createElement('div');
        card.className = 'recipe-card';
        card.innerHTML = `
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <div class="recipe-ingredients">
                <strong>Ingredients:</strong>
                <ul>
                    ${recipe.ingredients.map(ing => `<li>${ing}</li>`).join('')}
                </ul>
            </div>
        `;
        recipesGrid.appendChild(card);
    });
}

function searchRecipes() {
    const query = searchInput.value.toLowerCase().trim();
    if (query === '') {
        displayRecipes(recipes);
        return;
    }
    
    const filtered = recipes.filter(recipe => 
        recipe.name.toLowerCase().includes(query) ||
        recipe.description.toLowerCase().includes(query) ||
        recipe.ingredients.some(ing => ing.toLowerCase().includes(query))
    );
    
    displayRecipes(filtered);
}

searchBtn.addEventListener('click', searchRecipes);
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchRecipes();
    }
});

displayRecipes(recipes);

