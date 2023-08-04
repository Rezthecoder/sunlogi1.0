<script setup>
import Footer from './components/Footer.vue';
defineProps({
name:String,
})

</script>

<template>
  <h1>Sunlogi</h1>
   <!-- <div v-if="stock>5">まだ在庫あります</div>
   <div v-else-if="stock===0">在庫ないです</div> -->
<!-- <Footer msg1="test" msg2="rr"></Footer> -->

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
