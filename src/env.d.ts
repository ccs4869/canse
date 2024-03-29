/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '*.ts' { 
  
}

declare module 'vue3-markdown-it'

declare module '@kangc/v-md-editor';

declare module '@kangc/v-md-editor/lib/theme/vuepress.js'