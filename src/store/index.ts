import { defineStore } from 'pinia'
import LoginCom from '@/pages/Essay/Login/Login.vue'
import RegistCom from '@/pages/Essay/Login/Register.vue'
import { ref } from 'vue'
type tagsType = {
  name: string,
  type:string
}
export const useMainStore = defineStore('main', {
  state: () => ({ 
    tags: [{ name: "首页", type: "success" }],
    imgDoc: {className:'tab'},

    isCollapse: true,
    routeFullPath: '',
    routeName:[''],
    mode: false,
    componentId: LoginCom,
    isLover:ref(false)
  }),
  actions: {
    switchMode() { 
      this.mode = !this.mode
    },
    switchRegistCom() { 
      this.componentId = RegistCom
    },
    switchLoginCom() {
      this.componentId = LoginCom
    },
    changeCollapse(){ 
      if (this.isCollapse == true) {
        this.imgDoc.className = "tab-img-open"
        this.isCollapse = false
      } else {
        this.imgDoc.className = "tab-img-close"
        this.isCollapse = true
      }
    },
    addTag(newTag: tagsType){
      this.tags.push(newTag)
    },
    delTag(idx:number){ 
      this.tags.splice(idx, 1)
    },
    changeRouteFullPath(fullPath:string){ 
      this.routeFullPath = fullPath
    },
    updateRouteName( [fName,sName]:[string,string]){
      this.routeName =  [fName,sName]
    }
  }
})

