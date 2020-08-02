<template>
    <div class="container recipeContainer">
      <div class="card">
            <div v-for="x in recipe" :key="x.id" class="row">
                <div v-for="rec in x" :key="rec.idMeal"  class="col-sm-12 col-md-12 col-lg-12">
                     <div class="card-body text-center">
                        <h2>{{ rec.strMeal }}</h2>
                    </div> 
                    <img class="card-img-top" :src="rec.strMealThumb">
                    <div class="cuisine">
                        <span class="rec-info">Course:</span><span class="rec-info-desc">{{ rec.strCategory }}</span> 
                        <span class="rec-info">Cuisine:</span><span class="rec-info-desc">{{ rec.strArea }}</span> 
                    </div>    
                    <hr>
                    <div class="ingredientes">
                        <h3 class="text-center">Ingredients</h3>
                            <ul>
                                <li>{{ rec.strMeasure1 }} {{ rec.strIngredient1 }} </li>
                                <li>{{ rec.strMeasure2 }} {{ rec.strIngredient2 }}</li>
                                <li>{{ rec.strMeasure3 }} {{ rec.strIngredient3 }}</li>
                                <li>{{ rec.strMeasure4 }} {{ rec.strIngredient4 }}</li>
                                <li>{{ rec.strMeasure5 }} {{ rec.strIngredient5 }}</li>
                                <li>{{ rec.strMeasure6 }} {{ rec.strIngredient6 }}</li>
                                <li>{{ rec.strMeasure7 }} {{ rec.strIngredient7 }}</li>
                                <li>{{ rec.strMeasure8 }} {{ rec.strIngredient8 }}</li>
                                <li>{{ rec.strMeasure9 }} {{ rec.strIngredient9 }}</li>
                                <li>{{ rec.strMeasure10 }} {{ rec.strIngredient10 }}</li>
                                <li>{{ rec.strMeasure11 }} {{ rec.strIngredient11 }}</li>
                                <li>{{ rec.strMeasure12 }} {{ rec.strIngredient12 }}</li>
                                <li>{{ rec.strMeasure13 }} {{ rec.strIngredient13 }}</li>
                                <li>{{ rec.strMeasure14 }} {{ rec.strIngredient14 }}</li>
                                <li>{{ rec.strMeasure15 }} {{ rec.strIngredient15 }}</li>
                                <li>{{ rec.strMeasure16 }} {{ rec.strIngredient16 }}</li>
                                <li>{{ rec.strMeasure17 }} {{ rec.strIngredient17 }}</li>
                                <li>{{ rec.strMeasure18 }} {{ rec.strIngredient18 }}</li>
                                <li>{{ rec.strMeasure19 }} {{ rec.strIngredient19 }}</li>
                                <li>{{ rec.strMeasure120 }} {{ rec.strIngredient20 }}</li>
                            </ul>
                    </div>
                    <hr>
                    <div class="prep-steps">
                        <h4 class="text-center">Preparation Steps</h4> 
                            <p>{{ rec.strInstructions }}</p>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import Vue from "vue";
import axios from 'axios'
export default Vue.extend({
  name: "Recipe",
  data() {
      return{
        recipe: []
      }
  },
  created(){
      axios.get('https://www.themealdb.com/api/json/v2/9973533/lookup.php?i=idMeal')
        .then(item => {this.recipe = item.data})
        .catch(err => console.log(err));
        
  }
});
</script>

<style scoped>

</style>