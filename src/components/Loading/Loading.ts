import { createVNode,render,VNode,App } from 'vue'
import Loading from './index.vue'
export default {
  install(app:App) { 
    const vnode: VNode = createVNode(Loading)
    render(vnode, document.body)
    app.config.globalProperties.$loading = {
      show: () => vnode.component?.exposed?.show(),
      hide:()=>vnode.component?.exposed?.hide()
    }
  }
}