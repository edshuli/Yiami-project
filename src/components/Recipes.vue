<template>
  <div class="container card-container">
    <div v-for="post in posts" :key="post.id" class="row">
      <div v-for="item in post" :key="item.idMeal" class="col-md-6 col-lg-6">
        <div class="card">
          <router-link to="/recipe">
            <img class="card-img-top" :src="item.strMealThumb"
          /></router-link>
          <div class="card-body">
            <h5 class="card-title">{{ item.strMeal }}</h5>
            <p class="card-text">{{ item.strArea }}</p>
            <div class="card-action btt-button">
              <router-link to="recipe" class="btt-link d-flex h-100"
                ><i
                  class="fas fa-angle-right mx-auto my-auto"
                  target="_blank"
                ></i
              ></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from 'axios'
export default Vue.extend({
  name: "Recipes",
  data() {
      return{
        posts: []
      }
  },
  created(){
      axios.get('https://www.themealdb.com/api/json/v2/9973533/randomselection.php')
        .then(res => {this.posts = res.data})
        .catch(err => console.log(err));
        
  }
});
</script>

<style scoped>

.btt-button{
    height: 25px;
    width: 25px;
    border:1px solid white;
    border-radius: 60%;
    margin-left:45%;
}

/*-----------MediaQueries----------*/

@media(min-width: 599px){
    .card{
        flex-direction:inherit;
    }
}
</style>
