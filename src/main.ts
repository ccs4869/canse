import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import { createPinia } from 'pinia'
import Loading from './components/Loading/Loading'
import { useMainStore } from './store'
import './assets/css/global.scss'
import './assets/css/reset.css'
import './assets/css/base.css'
import "element-plus/dist/index.css"
import "./assets/css/iconfont.css"
// import 'highlight.js/styles/base16/atelier-dune-light.css'
import 'highlight.js/lib/common'
import hljsVuePlugin from '@highlightjs/vue-plugin'

import VMdEditor from '@kangc/v-md-editor';
import '@kangc/v-md-editor/lib/style/base-editor.css';
import vuepressTheme from '@kangc/v-md-editor/lib/theme/vuepress.js';
import '@kangc/v-md-editor/lib/theme/style/vuepress.css';
// import Markdown from 'vue3-markdown-it'
// Prism
import Prism from 'prismjs';
// highlight code
import 'prismjs/components/prism-json';
VMdEditor.use(vuepressTheme, {
  Prism,
});

const app = createApp(App)

router.beforeEach((to) => { 
  // useMainStore().changeRouteFullPath(to.fullPath)
  // console.log(to.fullPath);
  console.log("to---?", to);
  if (to.path.startsWith('/zdf/')) { 
    if (localStorage.getItem('canse')!=='77c143848') { 
      return '/err'
    }
  }
})

app.use(hljsVuePlugin)
app.use(VMdEditor);
// app.use(Markdown);

app.use(router).use(i18n).use(createPinia()).use(Loading)
app.mount('#app')
