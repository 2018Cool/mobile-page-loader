/**
 * 全局插件
 */
// import NavPush from './navPush'
import iphoneDetector from './iphoneDetector'
const plugins = [
  // NavPush,
  iphoneDetector
]
export default {
  install(Vue) {
    plugins.forEach((item) => {
      Vue.use(item)
    })
  }
}
