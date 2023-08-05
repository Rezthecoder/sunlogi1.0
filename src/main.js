import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Dropdown from "./components/Dropdown.vue";
import Login from "./components/Login.vue"
import  "bootstrap/dist/css/bootstrap.css"
import  "bootstrap/dist/js/bootstrap.js"
import TenpoSentaku from "./components/TenpoSentaku.vue";
// import router from './router';
// createApp(App).mount('#app')
// createApp(Footer).mount('#footer')
const app=createApp(Dropdown);
// app.use(router)
app.mount('#app')
// createApp(Dropdown).mount('#soko-names')
