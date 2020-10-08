import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        recipes: [],
        currentRecipe: JSON.parse(localStorage.getItem("current.recipe")) || [],
    },
    mutations: {
        SET_RECIPES(state, payload) {
            state.recipes = payload;
        },
        SET_CURRENT_RECIPE(state, payload) {
            if (payload < 0 || payload > state.recipes.length) return;
            state.currentRecipe = state.recipes[payload];
            localStorage.setItem(
                "current.recipe",
                JSON.stringify(state.recipes[payload])
            );
        }
    },
    actions: {
        setCurrentRecipe({
            commit
        }, payload) {
            commit("SET_CURRENT_RECIPE", payload);
        },
        async fetchRecipes({
            commit
        }) {
            try {
                const response = await fetch("https://www.themealdb.com/api/json/v2/9973533/randomselection.php");
                const data = await response.json();
                commit("SET_RECIPES", data);
                console.log(data)

            } catch (err) {
                console.log(err);
            }
        }
    }
});