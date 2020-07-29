<template>
    <div class="container recipeContainer">
       <ul>
           <li>item 1</li>
           <li>item 2</li>
       </ul>



      <!--  <div class="card">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12">
                    <img class="card-img-top" src="{{ recipes.image }}" alt="Image for {{ recipes.name }}">
                    <div class="cuisine">
                        <span class="rec-info">Course:</span><span class="rec-info-desc">{{ recipes.course }}</span> 
                        <span class="rec-info">Cuisine:</span><span class="rec-info-desc">{{ recipes.cuisine }}</span> 
                        <span class="rec-info">Allergens:</span>
                        {% for a in recipes.allergens %}
                        <span class="rec-info-desc">{{ a }}</span>
                        {% endfor %}
                        <span class="rec-info">By:</span><span class="rec-info-desc"> {{ recipes.author }}</span>
                        <span class="btn btn-counter multiple-count" data-count="0">&#x2764;</span>
                    </div> 
                    <div class="card-body text-center">
                        <h2>{{ recipes.name }}</h2>
                    </div>    
                    <div class="rec-description text-center">
                        <p>{{ recipes.description }}</p>
                        <p>{{ recipes.notes }}</p>
                    </div>
                    <hr>
                    <div class="ingredientes">
                        <h3 class="text-center">Ingredients</h3>
                        {% for ingredient in recipes.ingredient %}
                            <ul>
                                <li>{{ ingredient }}</li>
                            </ul>
                        {% endfor %}
                    </div>
                    <hr>
                    <div class="prep-steps">
                        <h4 class="text-center">Preparation Steps</h4> 
                        {% for step in recipes.step %}
                            <ul>
                                <li>{{ step }}</li>
                            </ul>
                        {% endfor %}
                    </div>
                    <hr>
                    <div class="row ingredient-group">
                        {% for rec in recipes.ingredientGroup %}
                        <div class="col-sm-12 col-md-6 col-lg-6">
                            <h5 class="text-center">{{ rec.name }}</h5>
                            <div class="row ingred-group-amount">
                                {% for ingredient in rec.ingredient %} 
                                    <ul class="ingredientGroup-ul">
                                        <li>
                                            {{ingredient.amount}}
                                            {{ingredient.unit}}
                                            {{ingredient.name}}
                                            {{ingredient.preparation}}
                                        </li>
                                    </ul>
                                {% endfor %} 
                            </div>
                        </div>
                        {% endfor %}
                    </div>
                </div>
            </div>
        </div>-->
        
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

</style>