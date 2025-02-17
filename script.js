const searchButton = document.getElementById('searchButton');
const mealList = document.getElementById('meal');
const mealDetailsContent = document.querySelector('.mealDetailsContent');
const recipeCloseButton = document.getElementById('recipeCloseButton');


                // Array of recipes
const recipes = [
    {   
        name: "Easy Peel Instant Pot Hard Boiled Eggs",
        ingredients: ["eggs"],
        instructions: "https://kristineskitchenblog.com/instant-pot-hard-boiled-eggs/",
        image: "images/Easy Peel Instant Pot Hard Boiled Eggs.jpg"
    },
    {   
        name: "Easy Peel Instant Pot Hard Boiled Eggs",
        ingredients: ["egg"],
        instructions: "https://kristineskitchenblog.com/instant-pot-hard-boiled-eggs/",
        image: "images/Easy Peel Instant Pot Hard Boiled Eggs.jpg"
    },
    {   
        name: "Basic Egg Pasta Dough",
        ingredients: ["eggs", "flour"],
        instructions: "https://www.thespicedlife.com/pasta-making-in-2009-101/",
        image: "images/Basic Egg Pasta Dough.jpg"
    },
    {   
        name: "Basic Egg Pasta Dough",
        ingredients: ["egg", "flour"],
        instructions: "https://www.thespicedlife.com/pasta-making-in-2009-101/",
        image: "images/Basic Egg Pasta Dough.jpg"
    },
    {   
        name: "Homemade Fresh Cream - Malai",
        ingredients: ["milk"],
        instructions: "https://simpleindianrecipes.com/Home/Homemade-Cream.aspx",
        image: "images/cream-malai.jpg"
    },
    {   
        name: "Screaming Potatoes",
        ingredients: ["potato"],
        instructions: "https://www.allrecipes.com/recipe/9206/screaming-potatoes/",
        image: "images/screaming potatoes.jpg"
    },
    {   
        name: "Screaming Potatoes",
        ingredients: ["potatoes"],
        instructions: "https://www.allrecipes.com/recipe/9206/screaming-potatoes/",
        image: "images/screaming potatoes.jpg"
    },
    {   
        name: "Oil Free Roast Potatoes",
        ingredients: ["potato"],
        instructions: "https://www.nestandglow.com/healthy-recipes/oil-free-roast-potatoes",
        image: "images/roasted potatoes.jpeg"
    },
    {   
        name: "Oil Free Roast Potatoes",
        ingredients: ["potatoes"],
        instructions: "https://www.nestandglow.com/healthy-recipes/oil-free-roast-potatoes",
        image: "images/roasted potatoes.jpeg"
    },
    {   
        name: "Baked Potatoes",
        ingredients: ["potato"],
        instructions: "https://www.parentclub.scot/recipe/baked-potatoes",
        image: "images/baked potato.jpg"
    },
    {   
        name: "Baked Potatoes",
        ingredients: ["potatoes"],
        instructions: "https://www.parentclub.scot/recipe/baked-potatoes",
        image: "images/baked potato.jpg"
    },
    {   
        name: "Slow Cooked Smoked Pork Butt With White Wine",
        ingredients: ["wine", "smokedpork"],
        instructions: "https://nocrumbsleft.net/2018/12/06/roys-midwinter-dinner/",
        image: "images/Smoked Porked.jpg"
    },
    {
        name: "Scrambled Eggs",
        ingredients: ["butter", "eggs"],
        instructions: "https://hangrywoman.com/perfect-scrambled-eggs/",
        image: "images/scrambbled eggs.jpg",    
    },
    {
        name: "Scrambled Eggs",
        ingredients: ["butter", "egg"],
        instructions: "https://hangrywoman.com/perfect-scrambled-eggs/",
        image: "images/scrambbled eggs.jpg",    
    },

    {
        name: "How to Make Ghee from Butter",
        ingredients: ["butter"],
        instructions: "https://werecipes.com/how-to-make-ghee-from-butter/",
        image: "images/ghee.jpg ",
    },

    {
        name: "Grilled Cheese Sandwich",
        ingredients: ["bread", "cheese", "butter"],
        instructions: "https://www.vvsupremo.com/recipe/grilled-cheese-sandwich/",
        image: "images/grilled cheese sandwich.png"
    },
   
    {   
        name: "Rich & Fruity Malbec Argentinian Red With White Wine",
        ingredients: ["wine"],
        instructions: "https://www.tastyeverafter.com/wine-slushy/",
        image: "images/wine.jpg"
    },
    {   
        name: "Italian Lemonade With White Wine",
        ingredients: ["wine", "lemon"],
        instructions: "https://bonapeti.com/recipes/r-28140-Italian_Lemonade",
        image: "images/Italian Lemonade.jpg"
    },
    {   
        name: "Pickled Red Onion With White Wine",
        ingredients: ["wine", "onion"],
        instructions: "https://www.cookforyourlife.org/recipes/pickled-red-onion/",
        image: "images/Pickled red onion.jpg"
    },
    {   
        name: "The Best Steamed Asparagus With White Wine",
        ingredients: ["wine", "asparagus","butter"],
        instructions: "https://www.allrecipes.com/recipe/49439/the-best-steamed-asparagus/",
        image: "images/The Best Steamed Asparagus.jpg"
    },
    {   
        name: "Nick’s Grilled Pork Tenderloin With Red Wine Recipe",
        ingredients: ["wine", "pork"],
        instructions: "https://lakegenevacountrymeats.com/recipes/nicks-grilled-pork-tenderloin-recipe",
        image: "images/pork file.jpg"
    },

    {
        name: "Homemade cottage cheese",
        ingredients: ["milk"],
        instructions:
            "https://housewifehowtos.com/cook/how-to-make-homemade-cottage-cheese/",
        image: "images/homemade cottage cheese.jpg",
    },
    {
        name: "Grilled beef",
        ingredients: ["beef"],
        instructions:
            "https://www.bettycrocker.com/recipes/grilled-beef-steaks/350166ba-818f-4e80-a79a-9582350a1ebb",
        image: "images/grilled beef.jpg",
    },
    {
        name: "Grilled Pork Chops",
        ingredients: ["pork"],
        instructions:
            "https://lakegenevacountrymeats.com/recipes/grilled-pork-chops",
        image: "images/Grilled Pork Chops.jpg",
    },
    {
        name: "Saute flavored with carrots",
        ingredients: ["carrots", "butter"],
        instructions:
            "https://www.yummytoddlerfood.com/sauteed-carrots/",
        image: "images/carrot sautee.jpg",
    },
    {
        name: "Saute flavored with carrots",
        ingredients: ["carrot", "butter"],
        instructions:
            "https://www.yummytoddlerfood.com/sauteed-carrots/",
        image: "images/carrot sautee.jpg",
    },
    {
        name: "Baked peppers",
        ingredients: ["peppers"],
        instructions: "https://houseofnasheats.com/how-to-make-roasted-red-peppers/",
        image: "images/baked peppers.jpeg",
    },
    {
        name: "Baked peppers",
        ingredients: ["pepper"],
        instructions: "https://houseofnasheats.com/how-to-make-roasted-red-peppers/",
        image: "images/baked peppers.jpeg",
    },
    {
        name: "Hasselback potatoes",
        ingredients: ["potatoes", "butter"],
        instructions:
            "https://recipes.oregonlive.com/recipes/hasselback-red-potatoes",
        image: "images/hasselback potatoes.jpeg",
    },
    {
        name: "Hasselback potatoes",
        ingredients: ["potato", "butter"],
        instructions:
            "https://recipes.oregonlive.com/recipes/hasselback-red-potatoes",
        image: "images/hasselback potatoes.jpeg",
    },
    {
        name: "Mushroom risotto",
        ingredients: ["mushrooms", "rice", "butter"],
        instructions:
            "https://www.loveandlemons.com/mushroom-risotto/",
        image: "images/risotto with mushrooms.jpg",
    },
    {
        name: "Macaroni and cheese",
        ingredients: ["pasta", "cheese"],
        instructions:
            "https://www.landolakesfoodservice.com/recipes/macaroni-and-cheese-with-green-chiles/",
        image: "images/mac&cheese.jpg",
    },
    {
        name: "Buffalo Chicken Wing Soup",
        ingredients: ["chicken", "onion","butter","celery","carrots","tomato"],
        instructions:
            "https://www.jocooks.com/recipes/buffalo-chicken-wing-soup/",
        image: "images/Buffalo Chicken Wing Soup.jpg",
    },
    {
        name: "Buffalo Chicken Wing Soup",
        ingredients: ["chicken", "onion","butter","celery","carrot","tomato"],
        instructions:
            "https://www.jocooks.com/recipes/buffalo-chicken-wing-soup/",
        image: "images/Buffalo Chicken Wing Soup.jpg",
    },
    {
        name: "Pork skewers",
        ingredients: ["pork", "peppers", "onion","mushrooms"],
        instructions:
            "https://eatsmarter.com/recipes/grilled-pork-vegetable-skewers",
        image: "images/pork skewers.jpeg",
    },
    {
        name: "Baked Chicken Wings Recipe",
        ingredients: ["chicken", "garlic","pepper"],
        instructions:
            "https://lilluna.com/baked-chicken-wings/",
        image: "images/Baked Chicken Wings Recipe.jpg",
    },
    {
        name: "Pan-fried pork with garlic",
        ingredients: ["pork", "garlic"],
        instructions:
            "https://www.jessicagavin.com/pan-fried-pork-chops/",
        image: "images/pan-fried pork.jpg",
    },
    {
        name: "Baked mushrooms",
        ingredients: ["mushrooms", "cheese", "bacon"],
        instructions:
            "https://www.christinascucina.com/bacon-and-cream-cheese-filled-mushrooms/",
        image: "images/baked mushrooms.jpeg",
    },
    {
        name:"Stir Fry",
        ingredients:["mushrooms","onion","peppers"],
        instructions:"https://www.archanaskitchen.com/garlic-pepper-mushroom-stir-fry-recipe",
        image:"images/stir fry.jpg"
    },
    {
        name:"Roasted potatoes",
        ingredients:["potatoes","garlic"],
        instructions:"https://www.iga.com.au/recipes/outdoor-entertaining/oven-roasted-potatoes/",
        image:"images/roasted potatoes.jpeg"
    },
    {
        name:"Roasted potatoes",
        ingredients:["potato","garlic"],
        instructions:"https://www.iga.com.au/recipes/outdoor-entertaining/oven-roasted-potatoes/",
        image:"images/roasted potatoes.jpeg"
    },
    {
        name:"Chicken breast stuffed with mushrooms",
        ingredients:["chicken","mushrooms","onion","garlic","butter"],
        instructions:"https://bakeatmidnite.com/mushroom-stuffed-chicken-breast-with-rosemary-butter/",
        image:"images/chicken breast with mushrooms.jpeg"
    },
    {
        name:"Chicken breast stuffed with mushrooms",
        ingredients:["chicken","mushroom","onion","garlic","butter"],
        instructions:"https://bakeatmidnite.com/mushroom-stuffed-chicken-breast-with-rosemary-butter/",
        image:"images/chicken breast with mushrooms.jpeg"
    },
    {
        name:"Chicken breast with bacon",
        ingredients:["chicken","bacon"],
        instructions:"https://lakegenevacountrymeats.com/recipes/bacon-wrapped-chicken-breast",
        image:"images/chicken breast with bacon.jpg"
    },
    {
        name:"Homemade Salt Cod",
        ingredients:["fish"],
        instructions:"https://www.saveur.com/basic-salt-cod-portuguese-recipe/",
        image:"images/Homemade Salt Cod.jpg"
    } ,
    {
        name:"Basic White Rice ",
        ingredients:["rice","butter"],
        instructions:"https://www.keyingredient.com/recipes/7733084/basic-white-rice-pressure-cooker/",
        image:"images/Basic White Rice.jpg"
    },
    {
        name:"Mashed potatoes",
        ingredients:["potatoes","onion","butter"],
        instructions:"https://www.thecookierookie.com/easy-mashed-potatoes-recipe-boiled-in-milk/",
        image:"images/mashed potatoes.jpg"
    },
    {
        name:"Mashed potatoes",
        ingredients:["potato","onion","butter"],
        instructions:"https://www.thecookierookie.com/easy-mashed-potatoes-recipe-boiled-in-milk/",
        image:"images/mashed potatoes.jpg"
    },
    {
        name:"Chicken breast cream soup",
        ingredients:["chicken","potatoes","onion"],
        instructions:"https://www.taste.com.au/recipes/cream-chicken-soup-2/1ee29018-66d6-400a-9e42-02de5fc1dc15",
        image:"images/chicken cream soup.jpeg"
    },
    {
        name:"Chicken breast cream soup",
        ingredients:["chicken","potato","onion"],
        instructions:"https://www.taste.com.au/recipes/cream-chicken-soup-2/1ee29018-66d6-400a-9e42-02de5fc1dc15",
        image:"images/chicken cream soup.jpeg"
    }
];


                // Function to call getMealList.
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.getElementById('searchButton'); 
    searchButton.addEventListener('click', getMealList);
});


                // Event listener for pressing Enter key 
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchInput').addEventListener('keydown', function (event) {    
        if (event.key === 'Enter') { 
            getMealList();
        }
    });
});

                // Get meal list that matches with the ingredients from input
function getMealList() {
    
    const inputText = document.getElementById('searchInput').value.trim().toLowerCase();
    const searchIngredients = inputText
        .split(/[\s,]+/) 
        .map(ingredient => ingredient.trim().toLowerCase())
        .filter(Boolean);
                // Filter recipes based on exact ingredient match
    const filteredRecipes = recipes.filter(recipe => {
        const recipeIngredients = recipe.ingredients.map(ingredient => ingredient.toLowerCase());
        return arraysEqual(recipeIngredients, searchIngredients);
    });
    displayMeals(filteredRecipes);
}


                // Check if two arrays are equal
function arraysEqual(array1, array2) {
    if (array1.length !== array2.length) 
        return false;
    return array1.sort().join(',') === array2.sort().join(',');
}


                // Display meals
function displayMeals(recipes) {
    mealList.innerHTML = '';
    if (recipes.length === 0) {
        mealList.innerHTML = '<p class = "notFound">No recipes found with the given ingredients.</p>';
        return;
    }
    recipes.forEach(recipe => {
        const mealItem = `
            <div class="mealItem">
                <div class="mealImg">
                    <img src="${recipe.image}" alt="${recipe.name}">
                </div>
                <div class="mealName">
                    <h3>${recipe.name}</h3>
                    <a href="#" class="recipeButton" onclick="showRecipeDetails('${recipe.name}')">Get recipe</a>
                </div>
            </div>
        `;
        mealList.innerHTML += mealItem;
    });
}


                // Show recipe details (modal window)
function showRecipeDetails(recipeName) {
    const recipe = recipes.find(r => r.name === recipeName);
    if (recipe) {
        mealDetailsContent.innerHTML = `
            <h2 class="recipeTitle">${recipe.name}</h2>
            <p class="recipeCategory">Ingredients: ${recipe.ingredients.join(', ')}</p>
            <div class="recipeMealImage">
                <img src="${recipe.image}" alt="${recipe.name}">
            </div>
            <div class="recipeInstruct">
                <a href="${recipe.instructions}" target="_blank" class="instructionLink">View full recipe</a>
            </div> 
        `;
        document.querySelector('.mealDetails').style.display = 'block';
    }
}



                // Close recipe details
document.addEventListener('DOMContentLoaded', function() {
    recipeCloseButton.addEventListener('click', () => {
        document.querySelector('.mealDetails').style.display = 'none';
    });      
});             


                // Hamburger menu 
const hambMenu = document.querySelector('.hamburgerMenu');
const navbar = document.querySelector('.navbar');

hambMenu.addEventListener('click', () => {
    hambMenu.classList.toggle('active');
    navbar.classList.toggle('active');
})
