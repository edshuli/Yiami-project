<template>
  <div class="container card-container">
    <div v-for="post in recipes" :key="post.id" class="row">
      <div v-for="item in post" :key="item.idMeal" class="col-md-6 col-lg-6">
        <div class="card">
          <a href="/"> <img class="card-img-top" :src="item.strMealThumb"/></a>
          <div class="card-body">
            <h5  class="card-title">
              {{ item.strMeal }}
            </h5>
            <p class="card-text">{{ item.strArea }}</p>
            <div class="card-action btt-button">
              <router-link
                :to="'recipe/' + item.idMeal"
                class="btt-link d-flex h-100"
                ><i
                  class="fas fa-angle-right mx-auto my-auto"
                  target="_blank"
                ></i>
                <span @click="item.idMeal"></span>
                <!-- <span v-on:click="setCurrentRecipe(i)"></span 
              >--></router-link
              >
              <!-- <a href="/" class="btt-link d-flex h-100"
                ><i
                  class="fas fa-angle-right mx-auto my-auto"
                  target="_blank"
                ></i
              ></a> 
              
              :to="'recipe/' + item.idMeal"-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "recipes",

  data() {
    return {};
  },
  props: ["recipes"],
  methods: {
    ...mapActions(["fetchRecipes", "fetchRecipe"])
  }
  
 
};
</script>

<style scoped>
.btt-button {
  height: 25px;
  width: 25px;
  border: 1px solid white;
  border-radius: 60%;
  margin-left: 45%;
}

/*-----------MediaQueries----------*/

@media (min-width: 599px) {
  .card {
    flex-direction: inherit;
  }
}
</style>
