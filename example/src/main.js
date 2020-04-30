import Vue from 'vue'
import App from './views/customers'
import Components from './components'
import VuePlugins from './vue-plugins'
import PageLoader from '../../lib'
import 'vant/lib/icon/local.css'
import './styles/index.scss'
// const test = require('mobile-page-loader')
Vue.use(Components) // 注册自定义组件和vant组件
Vue.use(VuePlugins)
Vue.use(PageLoader)
Vue.config.productionTip = false

new Vue({
  render: h => h(App)
}).$mount('#app')

