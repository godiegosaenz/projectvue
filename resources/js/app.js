require('./bootstrap');

window.Vue = require('vue');

Vue.component('app-init', require('./views/AppInit.vue').default);

import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Vuetify from 'vuetify';
Vue.use(Vuetify);

import Municipalidad from './views/Municipalidad'
import Inicio from './views/Init'


  let router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'dashboard',
            component: Inicio
        },
        {
            path: '/municipalidad',
            name: 'municipalidad',
            component: Municipalidad
        },
        {
            path: '/actualidad',
            name: 'Actualidad',
            component: {
                template: '<div>Actualidad 4</div>'
            }
        },
        {
            path: '/transparencia',
            name: 'transparencia',
            component: {
                template: '<div>Transparencia</div>'
            }
        }
    ],
});

const app = new Vue({
    el: '#app',
    router,
    vuetify: new Vuetify(),
});