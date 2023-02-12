import Vue from 'vue'
import App from './core/App.vue'
import ElementUI from 'element-ui'
import locale from 'element-ui/lib/locale/lang/en'
Vue.use(ElementUI, { locale })

new Vue({
    el: '#app',
    ...App
});
