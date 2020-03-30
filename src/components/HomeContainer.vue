<template>
    <div class="container-fluid calloutContainer">
      
      <!-- Callout -->
      <div class="row">
          <div class="col-12">
              <section class="callout jumbotron text-center">
                  <h1 class="jumbotron-header">Your online cooking book!</h1>
                  <hr class="dividers">
                  <p class="lead">In Greece they say:
                      <span class="smallTitle">Love passes through the stomach!</span> So here your will find all kind of recipes to win the heart of your beloved ones!</P>
              </section>
          </div>
      </div>
  </div>
</template>

<script>
export default {
   name: 'HomeContainer'
}

</script>

<style scoped>
   /*Jumbotron*/
.jumbotron {
    margin-top: 30%;
    background-color: #e9ecef03;
}
.jumbotron-header {
    color: #f8f9fa;
    font-weight: 400;
    font-size:30px;
    margin-bottom: 30px;
    font-family: 'Open Sans', sans-serif;
}
.jumbotron .lead {
    margin: 25px 0;
    color: #f8f9fa;
    font-size: 25px;
}
.smallTitle {
    color: #46090f;
    font-weight: 700;
}

/*-----Media Queries---*/
@media(max-width: 361px) {
    .jumbotron .lead {
        font-size: 20px;
    }
}

/*Ipad*/

@media (min-width:599px) {
    .jumbotron {
        margin-top: 15%;
    }
    .jumbotron-header {
       font-size:40px;
    }
}
</style>