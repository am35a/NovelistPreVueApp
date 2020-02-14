import Vue from 'vue'
import App from './App.vue'
import Player from './Player.vue'

import 'bootstrap/dist/css/bootstrap.css'
import './assets/style.css'

Vue.config.productionTip = false

Vue.component('app-player', Player)

new Vue({
	render: h => h(App),
}).$mount('#app')
