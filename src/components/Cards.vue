<template>
<div class="container cardContainer">
        <div classs="card">
         <div v-for="post in posts" v-bind:key="post.strCategory" class="card">
            <img class="card-img-top">
            <div class="card-body">
                <h5 class="card-title">
                    {{post.strMeal}}
                </h5>
                <p class="card-text">{{post.Area}}</p>
                <div class="card-action text-center">
                   <a href="#">Read More</a>
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