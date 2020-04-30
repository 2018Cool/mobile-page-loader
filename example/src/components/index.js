/**
 * 全局注册组件，局部使用的组件请不要添加到全局组件中区
 */
import WbNav from './WbNav.vue'
import WbContent from './WbContent.vue'
import VantCompants from './vant-compontents'
import WbFooter from './WbFooter'
import FaIcon from './FaIcon'
const components = [
  WbNav,
  WbContent,
  WbFooter,
  FaIcon,
  ...VantCompants
]

export default {
  install(Vue) {
    components.forEach((item) => {
      Vue.component(item.name, item)
    })
  }
}

