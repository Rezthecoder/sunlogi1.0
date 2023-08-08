import { createWebHistory,createRouter } from "vue-router";
import Login from "./components/Login.vue"
import Dropdown from "./components/Dropdown.vue"
import Location from "./components/Location.vue"
import LocationInfo from "./components/LocationInfo.vue"
import Syohin from "./components/Syohin.vue"
import SyohinInfo from "./components/SyohinInfo.vue"
import LocationKanryo from "./components/LocationKanryo.vue"
import Menu from "./components/Menu.vue";
import Nyuuko from "./components/Nyuuko.vue";
import Message from "./components/Message.vue";
import SyohinKanryo from "./components/SyohinKanryo.vue";
import TourokuKanryou from "./components/TourokuKanryou.vue";
//login routes
const routes =[
    {
        path: "/login",
        name:"login",
        component : Login
    },
    {
        path: "/dropdown",
        name:"dropdown",
        component : Dropdown,
    },
    {
        path: "/location",
        name:"location",
        component : Location
    },
    {
        path: "/locationInfo",
        name:"locationInfo",
        component : LocationInfo
    },
    ,
    {
        path: "/syohin",
        name:"syohin",
        component : Syohin
    },
    ,
    {
        path: "/syohinInfo",
        name:"syohinInfo",
        component : SyohinInfo
    },
    ,
    {
        path: "/locationKanryo",
        name:"locationKanryo",
        component : LocationKanryo
    },
    ,
    {
        path: "/menu",
        name:"menu",
        component : Menu
    },
    {
        path: "/nyuuko",
        name:"nyuuko",
        component : Nyuuko
    },
    {
        path: "/message",
        name:"message",
        component : Message
    },
    {
        path: "/syohinKanryo",
        name:"syohinKanryo",
        component : SyohinKanryo
    },{
        path: "/tourokuKanryou",
        name:"tourokuKanryou",
        component : TourokuKanryou
    },
]


const router =createRouter({
    history: createWebHistory(),
    routes
})


export default router
