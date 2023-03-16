/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue').default;

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('login-component', require('./components/Login.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.filter('formataDataTempoGlobal', function(d) {
    if(!d) return ''

    d = d.split('T')

    let data = d[0]
    let tempo = d[1]

    //formatando a data
    data = data.split('-')
    data = data[2] + '/' + data[1] + '/' + data[0]

    //formatar o tempo
    tempo = tempo.split('.')
    tempo = tempo[0]

    return data + ' ' + tempo
})

const app = new Vue({
    el: '#app',
});
