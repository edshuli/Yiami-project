import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import jQuery from 'jquery'

window.$ = window.jQuery = jQuery

import 'popper.js'
import 'bootstrap'
import './assets/main.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

new Vue({
    render: h => h(App),
}).$mount('#app')