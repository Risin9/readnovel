// resources/js/router/index.js
import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    saveScrollPosition: true,
    routes: [
        {
            name: 'index',
            path: '/index',
            component: resolve => void(require(['../index/Index.vue'], resolve))
        },
        {
            name: 'login',
            path: '/users/login',
            component: resolve => void(require(['../users/Login.vue'], resolve))
        },
        {
            name: 'register',
            path: '/users/register',
            component: resolve => void(require(['../users/Register.vue'], resolve))
        },
        // {
        //     name: 'home',
        //     path: '/',
        //     component: resolve => void(require(['../components/ExampleComponent.vue'], resolve))
        // },
        {
            name: 'home1',
            path: '/home',
            component: resolve => void(require(['../components/ExampleComponent.vue'], resolve))
        }
    ]
});
