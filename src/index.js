import Vue from 'vue';
import AppComponent from './components/AppComponent.vue';

document.addEventListener('DOMContentLoaded',function(){
    new Vue({
        render: e => e(AppComponent)
    }).$mount('#root')
});