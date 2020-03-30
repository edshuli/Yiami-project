<template>
  <div id="app">
    <HomePage msg="Welcome to Your Vue.js App"/>
    <HomeContainer/>
    <Cards v-bind:posts="posts"/>
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue'
import HomeContainer from './components/HomeContainer.vue'
import Cards from './components/Cards.vue'
import axios from 'axios'

export default {
  name: 'App',
  components: {
    HomePage,
    HomeContainer,
    Cards
  },
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
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
