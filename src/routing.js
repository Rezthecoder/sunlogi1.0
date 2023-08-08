import { createWebHistory,createRouter } from "vue-router";
import Login from "./components/Login.vue"
import Dropdown from "./components/Dropdown.vue"
import Location from "./components/Location.vue"
import LocationInfo from "./components/LocationInfo.vue"
import Syohin from "./components/Syohin.vue"
import SyohinInfo from "./components/SyohinInfo.vue"
import Kanryo from "./components/Kanryo.vue"
import Menu from "./components/Menu.vue";
import Nyuuko from "./components/Nyuuko.vue";

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
        path: "/kanryo",
        name:"kanryo",
        component : Kanryo
    },
    ,
    {
        path: "/menu",
        name:"menu",
        component : Menu
    },,
    {
        path: "/nyuuko",
        name:"nyuuko",
        component : Nyuuko
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes
})


export default router
