<template>
 <span>
    <HomeContainer/>
    <Recipes/>
 </span>   
</template>

 
<script>
import HomeContainer from '@/components/HomeContainer';
import Recipes from '@/components/Recipes';
/*import GoogleMapLoader from '@/components/GoogleMapLoader';
import GoogleMapMarker from '@/components/GoogleMapMarker';*/


export default {

    name: 'home',
    components: {
        HomeContainer,
        Recipes,
        /*GoogleMapLoader,
        GoogleMapMarker,*/
    },
    computed: {
    mapConfig () {
      return {
        center: { lat: 0, lng: 0 }
      }
    },
  },
};
</script>


<style scoped>

</style> 