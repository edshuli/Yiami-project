import Vue from "vue";
import Vuex from 'vuex';
import VueRouter from "vue-router";
import router from "./router";
import axios from 'axios'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        posts: [],
        apiUrl: 'https://www.themealdb.com/api/json/v2/9973533/randomselection.php'
    },
    mutations: {
        setRecipes(state, payload) {
            state.posts = payload;
        }
    },
    actions: {
        async getRecipes({ state, commit }, plan) {
            try {
                let response = await axios.get(`${state.apiUrl}`);
                commit('setRecipes', response.data.hits);
            } catch (error) {
                commit('setRecipes', [])
            }
        }
    }
});