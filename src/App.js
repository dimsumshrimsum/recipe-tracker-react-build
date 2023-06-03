import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  function handleFormSubmit(newRecipe) {
    setRecipes([...recipes, newRecipe]);
  }
  function deleteRecipe(recipeToDelete) {
    let filterRecipes = recipes.filter((recipe) => {
      return recipe !== recipeToDelete;
    });
    setRecipes(filterRecipes);
  }

  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe} />
      <RecipeCreate handleFormSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
