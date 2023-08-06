import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Dropdown from "./components/Dropdown.vue";
import Location from "./components/Location.vue";
import Login from "./components/Login.vue"
import  "bootstrap/dist/css/bootstrap.css"
import  "bootstrap/dist/js/bootstrap.js"
import router from './routing';



const app=createApp(App).use(router);

app.mount('#app')
