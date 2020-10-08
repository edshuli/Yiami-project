<template>
    <div class="container recipeContainer">
      <div class="card">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12" >
                     <div  class="card-body text-center">
                        <h2>{{ singleRecipe.strMeal }}</h2>
                    </div> 
                    <img class="card-img-top" :src=" singleRecipe.strMealThumb">
                    <div class="cuisine">
                        <span class="rec-info">Course:</span><span class="rec-info-desc">{{ singleRecipe.strCategory }}</span> 
                        <span class="rec-info">Cuisine:</span><span class="rec-info-desc">{{ singleRecipe.strArea }}</span> 
                    </div>    
                    <hr>
                    <div class="ingredientes">
                        <h3 class="text-center">Ingredients</h3>
                            <ul>
                                <li>{{ singleRecipe.strMeasure1 }} {{ singleRecipe.strIngredient1 }} </li>
                                <li>{{ singleRecipe.strMeasure2 }} {{ singleRecipe.strIngredient2 }}</li>
                                <li>{{ singleRecipe.strMeasure3 }} {{ singleRecipe.strIngredient3 }}</li>
                                <li>{{ singleRecipe.strMeasure4 }} {{ singleRecipe.strIngredient4 }}</li>
                                <li>{{ singleRecipe.strMeasure5 }} {{ singleRecipe.strIngredient5 }}</li>
                                <li>{{ singleRecipe.strMeasure6 }} {{ singleRecipe.strIngredient6 }}</li>
                                <li>{{ singleRecipe.strMeasure7 }} {{ singleRecipe.strIngredient7 }}</li>
                                <li>{{ singleRecipe.strMeasure8 }} {{ singleRecipe.strIngredient8 }}</li>
                                <li>{{ singleRecipe.strMeasure9 }} {{ singleRecipe.strIngredient9 }}</li>
                                <li>{{ singleRecipe.strMeasure10 }} {{ singleRecipe.strIngredient10 }}</li>
                                <li>{{ singleRecipe.strMeasure11 }} {{ singleRecipe.strIngredient11 }}</li>
                                <li>{{ singleRecipe.strMeasure12 }} {{ singleRecipe.strIngredient12 }}</li>
                                <li>{{ singleRecipe.strMeasure13 }} {{ singleRecipe.strIngredient13 }}</li>
                                <li>{{ singleRecipe.strMeasure14 }} {{ singleRecipe.strIngredient14 }}</li>
                                <li>{{ singleRecipe.strMeasure15 }} {{ singleRecipe.strIngredient15 }}</li>
                                <li>{{ singleRecipe.strMeasure16 }} {{ singleRecipe.strIngredient16 }}</li>
                                <li>{{ singleRecipe.strMeasure17 }} {{ singleRecipe.strIngredient17 }}</li>
                                <li>{{ singleRecipe.strMeasure18 }} {{ singleRecipe.strIngredient18 }}</li>
                                <li>{{ singleRecipe.strMeasure19 }} {{ singleRecipe.strIngredient19 }}</li>
                                <li>{{ singleRecipe.strMeasure120 }} {{ singleRecipe.strIngredient20 }}</li>
                            </ul>
                    </div>
                    <hr>
                    <div class="prep-steps">
                        <h4 class="text-center">Preparation Steps</h4> 
                            <p>{{ singleRecipe.strInstructions }}</p>
                    </div>
                    <hr>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import axios from 'axios'
export default ({
  name: "Recipe",
  props:['id'],
  data() {
      return{
        singleRecipe: ''
      }
  },
  mounted(){
      axios.get('https://www.themealdb.com/api/json/v2/9973533/randomselection.php')
        .then(response => {
            this.singleRecipe = response.data})
        .catch(error => {
            console.log(error)
      })   
    }
  });
</script>

<style scoped>

</style>