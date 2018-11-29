import Vue from 'vue'
import App from './app.vue'

const root = document.createElement('div')
document.body.appendChild(root)

import './assets/styles/global.styl'

new Vue({
    render: (h) => h(App)
}).$mount(root)