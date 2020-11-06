import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
        currentRecipe: [],
    },
    mutations: {
        setRecipes(state, payload) {
            state.recipes = payload;
        },
        setCurrentRecipe(state, payload) {
            state.currentRecipe = payload;
        }
    },
    actions: {
        setCurrentRecipe({
            commit
        }, payload) {
            commit("setCurrentRecipe", payload);
        },

        async fetchRecipes({ commit }) {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v2/9973533/randomselection.php");
                const data = await response.json();
                commit("setRecipes", data);
                console.log(data)

            } catch (err) {
                console.log(err);
            }
        },

    },

});