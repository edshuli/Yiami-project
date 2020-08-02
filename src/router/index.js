import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";


Vue.use(VueRouter);

const routes = [{
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ('../views/About.vue'),
        meta: {
            authRequired: true
        }
    },
    {
        path: '/recipe',
        name: 'recipe',
        component: () =>
            import ('../views/Recipe.vue')
    }
]

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
});

export default router;