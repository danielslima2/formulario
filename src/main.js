import Vue from 'vue'
import App from './App.vue'
import Formulario from './components/Formulario.vue'

Vue.config.productionTip = false
Vue.component('form', Formulario)

new Vue({
  render: h => h(App),
}).$mount('#app')
