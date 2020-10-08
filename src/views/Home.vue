<template>
  <span>
    <HomeContainer />
    <Recipes :recipes="recipes" />
  </span>
</template>

<script>
import { mapState } from "vuex";
import HomeContainer from "@/components/HomeContainer";
import Recipes from "@/components/Recipes.vue";
/*import GoogleMapLoader from '@/components/GoogleMapLoader';
import GoogleMapMarker from '@/components/GoogleMapMarker';*/

export default {
  name: "home",
  computed: {
    ...mapState(["recipes"]),
  },
  created() {
    this.$store.dispatch("fetchRecipes");
  },
  components: {
    HomeContainer,
    Recipes,
    /*GoogleMapLoader,
        GoogleMapMarker,*/
  },

  // computed: {
  //   mapConfig() {
  //     return {
  //       center: { lat: 0, lng: 0 },
  //     };
  //   },
  // },
};
</script>

<style scoped></style>
