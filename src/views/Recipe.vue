<template>
  <div class="container recipeContainer">
    <div class="card">
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
          <div class="card-body text-center">
            <h2>{{ currentRecipe.strMeal }}</h2>
          </div>
          <!-- <img class="card-img-top" :src="fetchRecipe.strMealThumb" />
          <div class="cuisine">
            <span class="rec-info">Course:</span
            ><span class="rec-info-desc">{{ fetchRecipe.strCategory }}</span>
            <span class="rec-info">Cuisine:</span
            ><span class="rec-info-desc">{{ fetchRecipe.strArea }}</span>
          </div>
          <hr />
          <div class="ingredientes">
            <h3 class="text-center">Ingredients</h3>
            <ul>
              <li>
                {{ fetchRecipe.strMeasure1 }}
                {{ fetchRecipe.strIngredient1 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure2 }}
                {{ fetchRecipe.strIngredient2 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure3 }}
                {{ fetchRecipe.strIngredient3 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure4 }}
                {{ fetchRecipe.strIngredient4 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure5 }}
                {{ fetchRecipe.strIngredient5 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure6 }}
                {{ fetchRecipe.strIngredient6 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure7 }}
                {{ fetchRecipe.strIngredient7 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure8 }}
                {{ fetchRecipe.strIngredient8 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure9 }}
                {{ fetchRecipe.strIngredient9 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure10 }}
                {{ fetchRecipe.strIngredient10 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure11 }}
                {{ fetchRecipe.strIngredient11 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure12 }}
                {{ fetchRecipe.strIngredient12 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure13 }}
                {{ fetchRecipe.strIngredient13 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure14 }}
                {{ fetchRecipe.strIngredient14 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure15 }}
                {{ fetchRecipe.strIngredient15 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure16 }}
                {{ fetchRecipe.strIngredient16 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure17 }}
                {{ fetchRecipe.strIngredient17 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure18 }}
                {{ fetchRecipe.strIngredient18 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure19 }}
                {{ fetchRecipe.strIngredient19 }}
              </li>
              <li>
                {{ fetchRecipe.strMeasure120 }}
                {{ fetchRecipe.strIngredient20 }}
              </li>
            </ul>
          </div>
          <hr />
          <div class="prep-steps">
            <h4 class="text-center">Preparation Steps</h4>
            <p>{{ fetchRecipe.strInstructions }}</p>
          </div>
          <hr />-->
        </div> 
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "recipe",
  data() {
    return {};
  },
  
  computed: {
    ...mapState(["currentRecipe"])
  },
  
};
</script>

<style scoped></style>
