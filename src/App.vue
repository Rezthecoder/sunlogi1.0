<script setup>
import Footer from './components/Footer.vue';
defineProps({
name:String,
})

</script>

<template>
  <h1>Sunlogi</h1>

  <router-link to="/login">Login</router-link><br>
  <router-link to="/dropdown">Dropdown</router-link><br>
  <router-link to="/location">Location</router-link><br>
  <router-link to="/locationInfo">LocationInfo</router-link><br>
  <router-link to="/syohin">Syohin</router-link><br>
  <router-link to="/syohinInfo">SyohinInfo</router-link><br>
  <router-link to="/kanryo">Kanryo</router-link><br>
  <router-link to="/menu">Menu</router-link><br>
  <router-link to="/nyuuko">Nyuuko</router-link><br>
  <router-link to="/message">Message</router-link><br>
  <router-link to="/picking">Picking</router-link><br>
  <router-view></router-view>
  
</template>


<style scoped>


.active{
  color:red;
  font-weight:900;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
