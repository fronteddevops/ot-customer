import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify' // path to vuetify export
import './main.scss'
import router from './router'
import i18n from './i18n'
import vue3GoogleLogin from 'vue3-google-login'
import infiniteScroll from 'vue-infinite-scroll'
import Axios from "axios";
import interceptor from './api/interceptor'
interceptor()
if(localStorage.getItem("access_token")) {
  Axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${localStorage.getItem("access_token")}`;
}
createApp(App).use(i18n)
.use(infiniteScroll)
  .use(vuetify)
  .use(router)
  .use(vue3GoogleLogin, {
    clientId: '1048006921877-aadvndmsc8v4oe8mog1rmiq2rtft1l4v.apps.googleusercontent.com'
  })
  .mount('#app')
