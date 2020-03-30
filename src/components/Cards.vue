<template>
<div class="container cardContainer">
        <div classs="card">
         <div v-for="post in posts" :key="post.id" class="card">
             <div v-for="item in post" :key="item.idMeal">
            <img class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">
                    {{item.strMeal}}
                </h5>
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

</style>