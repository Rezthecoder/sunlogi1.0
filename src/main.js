import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Footer from './components/Footer.vue'
import Dropdown from "./components/Dropdown.vue";
import Location from "./components/Location.vue";
import LocationInfo from "./components/LocationInfo.vue";
import Login from "./components/Login.vue"
import Syohin from "./components/Syohin.vue";
import SyohinInfo from "./components/SyohinInfo.vue";
import LocationKanryo from "./components/LocationKanryo.vue";
import SyohinKanryo from "./components/SyohinKanryo.vue";
import Message from "./components/Message.vue";
import TourokuKanryou from "./components/TourokuKanryou.vue";
import Syuka from "./components/Syuka.vue";
import SyukaKanryo from "./components/SyukaKanryo.vue";
import SyukaInfo from "./components/SyukaInfo.vue";
import IkatsuLocationIdou from "./components/IkatsuLocationIdou.vue";

import  "bootstrap/dist/css/bootstrap.css"
import  "bootstrap/dist/js/bootstrap.js"


import router from './routing';

const app=createApp(App).use(router);
app.mount('#app')
