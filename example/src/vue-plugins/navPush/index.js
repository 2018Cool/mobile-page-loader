
// 页面出栈入栈操作
export const pageStack = [] // 页面栈
export function popPage(value) {
  let page = pageStack.pop()
  if (page !== value) {
    pageStack.push(page)
    console.error('页面堆栈顺序错误')
    pageStack.splice(pageStack.indexOf(value), 1)
    page = value
  }
  return page
}
export function pushPage(page) {
  page && pageStack.push(page)
}
export function pageDeep() {
  return pageStack.length
}
export default {
  install(Vue) {
    const el = document.body
    function navPush(store, router) {
      return function(component, data) {
        const Page = Vue.extend(component)
        const instance = new Page({ store: store, router: router, propsData: data }).$mount()
        el.appendChild(instance.$el)
        const page = instance.$children[0]
        if (page && page.show) {
          instance.$closeCallback = null
          instance.$callbackData = null
          instance.onPageClose = function(callback) { // 对话框关闭回掉函数
            instance.$closeCallback = callback
          }
          instance.$popPage = (data, delay = 0) => {
            if (data) {
              instance.$callbackData = data
            }
            if (delay === 0) {
              popPage(instance)
              page.hide()
            } else {
              setTimeout(() => {
                popPage(instance)
                page.hide()
              }, delay)
            }
          }
          page.$onClosed = function() {
            if (instance.$closeCallback) {
              instance.$closeCallback(instance.$callbackData)
            }
            el.removeChild(instance.$el)
            instance.$destroy()
          }
          page.$popPage = instance.$popPage
          page.show()
          pushPage(instance)
          return instance
        } else {
          console.error('$navPush方法只能用于基于WbPage或WbModel实现的component')
        }
      }
    }
    Vue.mixin({
      created() {
        if (!this.$pushPage) {
          this.$pushPage = navPush(this.$store, this.$router)
        }
      }
    })
  }
}

