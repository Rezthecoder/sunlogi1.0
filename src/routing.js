import { createWebHistory,createRouter } from "vue-router";
import Login from "./components/Login.vue"
import Dropdown from "./components/Dropdown.vue"
import Location from "./components/Location.vue"

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
        component : Dropdown
    },
    {
        path: "/location",
        name:"location",
        component : Location
    }
]

const router =createRouter({
    history: createWebHistory(),
    routes
})


export default router
