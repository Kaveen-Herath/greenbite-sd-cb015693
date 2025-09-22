const recipes = [
  {
    id: 1,
    title: "Garlic Butternut Squash Steaks",
    category: "Main Courses",
    shortDesc: "A delicious plant-based alternative to traditional steak. The squash is tossed with juicy plum tomatoes, creamy mozzarella",
    image: "assests/images/recipes/id1.webp",
    ingredients: ["2 small butternut squash", "1 tablespoon extra-virgin olive oil", "½ teaspoon salt", "¼ teaspoon ground nutmeg", "3 large cloves garlic", "Lemon wedges"],
    steps: ["Preheat oven to 450°F. Line a large rimmed baking sheet with parchment paper.", 
            "Trim stems off 2 butternut squash; cut each squash crosswise at base of neck to separate the bulb and neck", 
            "Combine 1 tablespoon oil, ¼ teaspoon salt and ¼ teaspoon nutmeg in a small heatproof bowl", 
            "Meanwhile, melt cubed butter and the remaining ¼ teaspoon salt in a small saucepan over medium-high heat",
            "Remove the steaks from the oven and brush with garlic butter. Transfer to a platter"],
    nutrition: { calories: 222, carbs: 23, protein: 2, fat: 15 }
  },

  {
    id: 2,
    title: "Baked Creamed Spinach Pasta",
    category: "Main Courses",
    shortDesc: "This baked creamed spinach pasta is comfort in a bowl creamy, cheesy and utterly delicious! Its an easy, satisfying meal thats perfect for busy weeknights.",
    image: "assests/images/recipes/id2.webp",
    ingredients: ["12 ounces whole-wheat penne", "4 ounces reduced-fat cream cheese, cut into pieces", "¾ cup grated Parmesan cheese", "3 tablespoons nutritional yeast (optional)",
                    "1 teaspoon grated lemon zest", "2 cups half-and-half", "3 cloves garlic, minced", "4 ounces low-moisture, part-skim mozzarella cheese, shredded, divided",
                    "Chopped fresh flat-leaf parsley for garnish (Optional)"],

    steps: ["Position oven rack in center; preheat to 350°F. Coat a 9-by-13-inch broiler-safe baking dish with cooking spray. Bring a large pot of water to a boil over high heat.", 
            "Meanwhile, whisk cream cheese pieces, ¾ cup Parmesan, 3 tablespoons nutritional yeast (if using), 1 teaspoon lemon zest, ½ teaspoon salt and ¼ teaspoon nutmeg in a medium bowl until combined.", 
            "Heat 1 tablespoon oil in the pot over medium-high heat. Add minced shallot and minced garlic; cook, stirring constantly, until softened and fragrant, about 1 minute.", 
            "Add the cooked pasta, the cream cheese mixture and ½ cup mozzarella to the pot; stir to combine. Transfer to the prepared baking dish, spreading into an even layer; sprinkle with the remaining ½ cup mozzarella.",
            "Increase oven temperature to broil. Uncover the baking dish; broil on the center rack until browned on top, about 5 minutes. Garnish with parsley, if desired."],
    nutrition: { calories: 440, carbs: 40, protein: 20, fat: 24 }
  },

  {
    id: 3,
    title: "Roasted Cauliflower Salad with Lemon Garlic Vinaigrette",
    category: "Salads",
    shortDesc: "This roasted cauliflower salad is a flavorful side dish that pairs with just about anything. The cauliflower is roasted alongside sweet bell pepper until golden and caramelized, giving it a nutty depth of flavor.",
    image: "assests/images/recipes/id3.webp",
    ingredients: ["6 cups cauliflower florets", "1 small red bell pepper, sliced", "5 tablespoons extra-virgin olive oil", "½ teaspoon salt", "½ teaspoon ground pepper",
                    "2 tablespoons lemon juice", "2 teaspoons honey", "½ cup sliced red onion", "¼ cup chopped mixed fresh tender herbs"],

    steps: ["Preheat oven to 450°F. Line a large rimmed baking sheet with parchment paper.", 
            "Toss 6 cups cauliflower, the sliced bell pepper, 1 tablespoon oil, ¼ teaspoon salt and ¼ teaspoon pepper together in a large bowl until well coated. ", 
            "Meanwhile, whisk 2 tablespoons lemon juice, the grated garlic, 2 teaspoons honey, ½ teaspoon mustard and the remaining 4 tablespoons oil, ¼ teaspoon salt and ¼ teaspoon pepper together in a small bowl until emulsified.", 
            "Transfer the roasted cauliflower mixture to a large serving bowl; add 2 cups salad greens, ½ cup onion, ¼ cup chopped herbs and ⅓ cup feta."],
    nutrition: { calories: 128, carbs: 6, protein: 3, fat: 11 }
  },

  {
    id: 4,
    title: "Quinoa Deli Salad With Fresh Berries",
    category: "Salads",
    shortDesc: "This healthy version of a deli salad combines hearty quinoa and chickpeas with small amounts of ham and mozzarella, so you get all of the flavor without overdoing it on the sodium.",
    image: "assests/images/recipes/id4.webp",
    ingredients: ["3 cups coarsely chopped Bibb, Boston, or butterhead lettuce", "¼ cup thinly sliced red bell pepper", "2 tablespoons red-wine vinaigrette, divided", 
                    "¼ cup cooked quinoa", "½ cup canned low-sodium chickpeas, rinsed", "¼ cup drained canned artichoke hearts, quartered", "1 slice low-sodium deli ham, diced"],

    steps: ["Toss lettuce and pepper with 1 Tbsp. plus 1 tsp. vinaigrette and place on a 9-inch plate.", "Toss quinoa and chickpeas with the remaining 2 tsp. vinaigrette and place on top of the lettuce and pepper. Top with artichokes, ham, and mozzarella."],
    nutrition: { calories: 404, carbs: 39, protein: 18, fat: 21 }
  },

  {
    id: 5,
    title: "Blueberry-Peach Chia Seed Smoothie",
    category: "Smoothie",
    shortDesc: "This fruit smoothie is a nutrient-packed drink thats perfect for your next breakfast. It blends frozen peaches and sweet frozen blueberries with a splash of almond milk and yogurt for a creamy, fruity base.",
    image: "assests/images/recipes/id5.webp",
    ingredients: ["2 cups unsweetened vanilla almond milk", "½ cup whole-milk plain strained yogurt", "⅓ cup chopped pitted Medjool dates", "¼ cup fresh orange juice", "1¾ cups frozen peaches",
                    "¾ cup frozen blueberries", "2 tablespoons chia seeds", "1 teaspoon vanilla extract"],

    steps: ["Combine 2 cups almond milk, ½ cup yogurt, ⅓ cup dates, ¼ cup orange juice, 1¾ cups peaches, ¾ cup blueberries, 2 tablespoons chia seeds, 1 teaspoon vanilla, ¼ teaspoon cardamom (or ginger) and ⅛ teaspoon salt in a blender.", 
            "process until smooth, about 1 minute. Divide between 2 glasses; serve immediately."],
    nutrition: { calories: 359, carbs: 60, protein: 11, fat: 10 }
  },  

{
    id: 6,
    title: "Mini Bell Peppers with Cottage Cheese",
    category: "Snacks",
    shortDesc: "These cottage cheese stuffed mini peppers make an excellent bite-size snack or appetizer thats nutritious and satisfying. The creamy cottage cheese is flavored with Parmesan and a splash of lemon juice.",
    image: "assests/images/recipes/id6.webp",
    ingredients: ["1 cup reduced-fat cottage cheese", "¼ cup grated Parmesan cheese", "2 tablespoons extra-virgin olive oil", "2 tablespoons thinly sliced fresh chives", "1½ teaspoons grated lemon zest",
                    "¾ teaspoon ground pepper", "¾ teaspoon garlic powder", "¼ teaspoon salt"],

    steps: ["Combine 1 cup cottage cheese, ¼ cup Parmesan, 2 tablespoons oil, 2 tablespoons chives, 1½ teaspoons lemon zest, ¾ teaspoon pepper, ¾ teaspoon garlic powder and ¼ teaspoon salt in a medium bowl",
             "Spoon the mixture evenly (about 1 tablespoon each) into the halved peppers; place on a serving platter."],
    nutrition: { calories: 109, carbs: 7, protein: 6, fat: 7 }
  }
];


// Category Filter

var categoryFilter = document.getElementById("categoryFilter");

var categories = ["All"];
for (var i = 0; i < recipes.length; i++) {
  var cat = recipes[i].category;
  if (categories.indexOf(cat) === -1) { // if not already in list
    categories.push(cat);
  }
}

// To create option elements for each category
for (var j = 0; j < categories.length; j++) {
  var option = document.createElement("option");
  option.value = categories[j];
  option.textContent = categories[j];
  categoryFilter.appendChild(option);
}


// Render Recipe Cards

var recipesContainer = document.getElementById("recipesContainer");

function renderRecipes(filterCategory, searchTerm) {
  // Set default values if not given
  if (filterCategory === undefined) {
    filterCategory = "All";
  }
  if (searchTerm === undefined) {
    searchTerm = "";
  }

  // Clear old recipes
  recipesContainer.innerHTML = "";

  // Filter recipes
  var filtered = [];
  for (var i = 0; i < recipes.length; i++) {
    var recipe = recipes[i];

    var matchesCategory = (filterCategory === "All" || recipe.category === filterCategory);
    var matchesSearch = recipe.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;

    if (matchesCategory && matchesSearch) {
      filtered.push(recipe);
    }
  }

  // Display filtered recipes
  for (var k = 0; k < filtered.length; k++) {
    var r = filtered[k];
    var card = document.createElement("div");
    card.classList.add("recipe-card");

    // Build inner content step by step
    var img = document.createElement("img");
    img.src = r.image;
    img.alt = r.title;

    var h3 = document.createElement("h3");
    h3.textContent = r.title;

    var p = document.createElement("p");
    p.textContent = r.shortDesc;

    // Adding to card
    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);

    // Add click listener to open modal
    card.addEventListener("click", (function(recipeCopy) {
      return function() {
        openModal(recipeCopy);
      }
    })(r));

    // Add card to container
    recipesContainer.appendChild(card);
  }
}


// Filter and Search Events
var searchInput = document.getElementById("searchInput");

categoryFilter.addEventListener("change", function() {
  renderRecipes(categoryFilter.value, searchInput.value);
});

searchInput.addEventListener("input", function() {
  renderRecipes(categoryFilter.value, searchInput.value);
});


// Modal Functionality
var modal = document.getElementById("recipeModal");
var closeModalBtn = modal.querySelector(".close");

function openModal(recipe) {
  // Set title and image
  document.getElementById("modalTitle").textContent = recipe.title;
  document.getElementById("modalImage").src = recipe.image;

  // Ingredients list
  var ingredientsList = document.getElementById("modalIngredients");
  ingredientsList.innerHTML = "";
  for (var i = 0; i < recipe.ingredients.length; i++) {
    var li = document.createElement("li");
    li.textContent = recipe.ingredients[i];
    ingredientsList.appendChild(li);
  }

  // Steps list
  var stepsList = document.getElementById("modalSteps");
  stepsList.innerHTML = "";
  for (var j = 0; j < recipe.steps.length; j++) {
    var stepLi = document.createElement("li");
    stepLi.textContent = recipe.steps[j];
    stepsList.appendChild(stepLi);
  }

  // Nutrition info
  document.getElementById("nutrCalories").textContent = recipe.nutrition.calories + " kcal";
  document.getElementById("nutrCarbs").textContent = recipe.nutrition.carbs + " g";
  document.getElementById("nutrProtein").textContent = recipe.nutrition.protein + " g";
  document.getElementById("nutrFat").textContent = recipe.nutrition.fat + " g";

  // Show modal
  modal.style.display = "block";
}

// Close modal button
closeModalBtn.addEventListener("click", function() {
  modal.style.display = "none";
});

// Close modal when clicking outside
window.addEventListener("click", function(e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

renderRecipes();


