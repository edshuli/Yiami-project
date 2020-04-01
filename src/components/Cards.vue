<template>
    <div class="container cardContainer">
          <div v-for="post in posts" :key="post.id"  class="row">
             <div v-for="item in post" :key="item.idMeal" class="col-md-6 col-lg-6">
                 <div class="card">
                        <a href="">
                            <img class="card-img-top" :src="item.strMealThumb"/></a>
                        <div class="card-body">
                            <h5 class="card-title">{{item.strMeal}}</h5>
                            <p class="card-text">{{item.strArea}}</p>
                            <div class="card-action text-center">
                                    <a href="#">Read More</a>
                             </div>
                        </div>
                  </div>      
                </div>
              </div>  
        </div>
</template>

<script>
export default {
    name: "Cards",
     props: ["posts"]
}
</script>

<style scoped>

/*------Media Queries-----------*/

@media(min-width: 599px){
    .card{
        flex-direction:inherit;
    }
}

</style>