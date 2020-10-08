<template>
  <div class="container-fluid callout-container">
    <!-- Callout -->
    <div class="row">
      <div class="col-sm-6">
        <h2 class="products-font text-black">Be your own chef !</h2>
        <!--  {% for c in current_categories %}
                    <a class="category-badge text-decoration-none" href="{% url 'products' %}?category={{ c.name }}">
                        <span class="p-2 mt-2 badge badge-white text-black rounded-0 border border-dark">{{ c.friendly_name }}</span>
                    </a>
                {% endfor %} -->
      </div>
      <div class="col-sm-6 d-flex justify-content-center">
        <div class="sort-select-wrapper w-30">
          <select
            id="sort-selector"
            class="custom-select custom-select-sm rounded-0 border border"
          >
            <option value="reset">Sort by...</option>
            <option value="name_asc">Name (A-Z)</option>
            <option value="name_desc">Name (Z-A)</option>
            <option value="category_asc">Category (A-Z)</option>
            <option value="category_desc">Category (Z-A)</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeContainer",
};
</script>

<style scoped>
.products-font {
  font-family: "Montaga", serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  font-size: 20px;
  color: #4e4d4b;
}

#sort-selector {
  background-color: transparent;
}

.border {
  border: transparent !important;
}

.header {
  color: #f8f9fa;
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 30px;
  font-family: "Open Sans", sans-serif;
}

#sort-selector {
  outline: none !important;
  box-shadow: none;
}
</style>
