import Vue from 'vue'
import App from './App'
import functions from './utils/functions.js'

Vue.config.productionTip = false

App.mpType = 'app'

Vue.use(functions)

const app = new Vue({
    ...App
})
app.$mount()
