import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';


import { Request } from '@/api/request';
// import VueAxios from 'vue-axios'

const app = createApp(App as any)
// app.config.productionTip = false

Request.init();
 
app
  .use(store)
  .use(router)
  .use(ElementPlus)
  // .use(VueAxios, Request.init())
  .mount('#app')
