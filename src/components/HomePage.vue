<template>
    <div class="container-fluid navbar-menu">
      <div class="opaque-overlay">&nbsp;</div>
    <div class="row">
      <div class="col-12">
        <nav class="navbar navbar-expand-sm fixed-top navbar-light ">
          <a href="index.html" class="navbar-brand">Yiami<i class="fas fa-cookie-bite"></i></a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-dropdown" aria-controls="menuDropdown" aria-expanded="false" aria-label="Toggle navigation">
                         <span class="navbar-toggler-icon"></span>
                     </button>
          <div id="menu-dropdown" class="navbar-collapse collapse">
            <ul class="navbar-nav mr-auto">
              <li><a class="nav-link text-uppercase" href="#">Recipes</a></li>
              <li><a class="nav-link text-uppercase" href="#">Add your recipe!</a></li>
            </ul>
            <a href="/login" class="btn btn--cta btn--red">Sign in/up</a>
          </div>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<style scoped>
  /*----NavBar-------*/
.navbar-brand {
    font-family: "Sacramento", cursive;
    font-weight: 600;
    font-size: 30px;
}
.fa-cookie-bite {
    font-size: 20px;
    padding-left: 5px;
    color: #a52a2a;
}
.navbar {
    padding-bottom: 0;
    padding-top: 0;
    font-family: 'Open Sans', sans-serif;
    font-size: 1em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 1px;
}
.navbar-toggler {
    line-height: 0.5;
    border: 1px solid #fafaf8;
    border-radius: .25rem;
    padding: 0;
}
/* Delete the blue shadow from the navabar-toggler */
.navbar-toggler:focus,
.navabar-toggler:active {
    outline: none !important;
    box-shadow: none;
}
.navbar-collapse {
    text-align: center;
}
.navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.85);
}
.btn--cta {
    font-weight: 400;
    border-radius: 35px;
    width: 120px;
}
.btn--red {
    color: white;
    background-color: #ab3837;
    border-color: #b624054d;
}

/*-----------MediaQueries----------*/

/*Ipad*/

@media (min-width:599px) {
    .btn--cta {
        font-weight: bold;
        border-radius: 23px;
        width: 160px;
    }
    .navbar-brand {
        font-size: 35px;
    }
}
</style>