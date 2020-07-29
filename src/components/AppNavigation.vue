<template>
  <header class="container-fluid  fixed-top">
        <div class="row bg-white">
        <div class="col-12">
          <nav class="navbar navbar-expand-lg fixed-top navbar-light w-100">
              <a href="/" class="navbar-brand">Yiami<i class="fas fa-cookie-bite"></i></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu-dropdown" aria-controls="menu-dropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div id="menu-dropdown" class="navbar-collapse collapse">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item active"><a class="nav-link text-uppercase" href="/">Home</a></li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Recipe Categories</a>
                     <div class="dropdown-menu border-0 text-center" aria-labelledby="navbarDropdown">
                         <a class="dropdown-item nav-link text-uppercase" href="#">Pasta</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Chicken</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Goat</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Lamb</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Pork</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Beef</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Miscellaneous</a>

                     </div> 
                  </li>
                  <li class="nav-item dropdown">
                    <a class="nav-link text-uppercase" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#">Special Meals</a>
                     <div class="dropdown-menu border-0 text-center" aria-labelledby="navbarDropdown">
                         <a class="dropdown-item nav-link text-uppercase" href="#">Breakfast</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Starter</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Side</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Dessert</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Vegetarian</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Vegan</a>
                         <a class="dropdown-item nav-link text-uppercase" href="#">Seafood</a>
                     </div> 
                  </li>
              </ul>
              <div class="col-12 col-md-12 col-lg-6 my-auto py-1 py-lg-0">
                <ul class="list-inline list-unstyled text-center text-lg-right my-0">
                    <li class="list-inline-item nav-item dropdown">
                        <a class="text-black nav-link text-uppercase d-block" href="#" id="search" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                           <div class="text-center">
                                <div><i class="fas fa-search fa-lg"></i></div>
                                <p class="small-text my-0">Search</p>
                            </div>
                        </a>
                        <div class="dropdown-menu border-0 w-100 p-3 rounded-0 my-0" aria-labelledby="mobile-search">
                            <form class="form" method="GET" action="{% url 'products' %}">
                                <div class="input-group w-100">
                                    <input class="form-control border border-black rounded-0" type="text" name="q" placeholder="Search our site">
                                    <div class="input-group-append">
                                        <button class="form-control form-control btn btn-black border border-black rounded-0" type="submit">
                                            <span class="icon">
                                                <i class="fas fa-search"></i>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </li>
                    <li class="list-inline-item dropdown">
                        <a class="text-black nav-link text-uppercase" href="#" id="user-options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <div class="text-center">
                                <div><i class="fas fa-user fa-lg"></i></div>
                                <p class="small-text my-0">Account</p>
                            </div>
                        </a>
                        <div class="dropdown-menu border-0" aria-labelledby="user-options">
                            {% if request.user.is_authenticated %}
                                {% if request.user.is_superuser %}
                                <a href="#" class="dropdown-item">Product Management</a>
                                {% endif %}
                                <a href="#" class="dropdown-item">My Profile</a>
                                <a href="#" class="dropdown-item">Logout</a>
                            {% else %}
                                <a href="#" class="dropdown-item">Register</a>
                                <a href="#" class="dropdown-item">Login</a>
                            {% endif %}
                        </div>
                    </li>
                  </ul>  
                  </div>
            </div>
          </nav>
        </div>
      </div>
  </header>    
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'AppNavigation'
})
</script>


<style scoped>
.navbar-brand {
    font-family: "Sacramento", cursive;
    font-weight: 600;
    font-size: 30px;
    color:#4e4d4b;
}
.fa-cookie-bite {
    font-size: 20px;
    padding-left: 5px;
    color: #b38184;
}
.navbar {
    padding-bottom: 0;
    padding-top: 0;
    font-size: 1em;
    font-weight: bold;
    line-height: 1.5;
    letter-spacing: 1px;
    background-color: #f8eeed;
}
.navbar-toggler {
    line-height: 0.2;
    border: transparent;
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
    color: #1c1b1b!important;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.5;
    letter-spacing: 0.2em;
    font-size: 12px;
}
.dropdown-menu{
    background-color: #f8eeed;
}

#menu-dropdown {
        background-color: #f8eeed;
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

#search,
#user-options{
    color: #1c1b1b!important;
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    line-height: 1.5;
    letter-spacing: 0.2em;
    font-size: 12px; 
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

    
