import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/src/jquery.js'
import 'popper.js/dist/popper.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'font-awesome/css/font-awesome.min.css'
import VueSweetAlert2 from 'vue-sweetalert2'
import VuePageTransition from 'vue-page-transition'

Vue.use(VuePageTransition)
Vue.use(VueSweetAlert2)

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')