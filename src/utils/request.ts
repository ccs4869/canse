// 全局配置axios的默认值
// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 自定义实例axios的默认值
//        Set config defaults when creating the instance
// const instance = axios.create({
//   baseURL: 'https://api.example.com'
// });
//        Alter defaults after instance has been created
// instance.defaults.headers.common['Authorization'] = AUTH_TOKEN;
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

class Request { 
  instance: AxiosInstance
  axiosRequestConfig: AxiosRequestConfig
  constructor(config: AxiosRequestConfig) { 
    this.axiosRequestConfig = config
    this.instance = axios.create(this.axiosRequestConfig)
  }
  init() { 
    console.log('初始化拦截器');
  }
  getTabInfo() { 
    return axios.get('/data/ms_tab_info.json')
  }
  getNews() { 
    return axios.get('/api/get/news')
  }
  getTest() {
    return this.instance.get('/testApi')
  }
  postRegiste(body:string) { 
    return this.instance.post('/api/register',body)
  }
  postLogin(body:string) { 
    return this.instance.post('/api/login',body)
  }
  getArtContent() { 
    return this.instance.get('/api/getArt')
  }
  postIssue() { 
    return this.instance.post('/api/postArt')
  }
}

const request = new Request({
  baseURL:'http://127.0.0.1'
})

export default request