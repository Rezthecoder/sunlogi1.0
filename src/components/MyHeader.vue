<script setup>

defineProps({
  msg: String
})
</script>

<template>
 

 <header>
    <div class="header-left">
      <span id="page-title" style="color:rgb(3, 10, 73)">{{ msg }}</span>
    </div>
    <div class="header-right">
      <router-link to="/"><img src="../assets/test.png" alt="ログアウト"></router-link>
    </div>
  </header>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: white; */
  height: 60px;
  padding: 0 8px;
  /* box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); */
  max-width:100%;
 
}

.header-left {
  display: flex;
  align-items: center;
}

.header-left span {
  font-size: 20px;
  font-weight: bold;
}

.header-right img {
  width: 30px;
  height: 30px;
  cursor: pointer;
}

@media (max-width: 600px) {
  .header-left span {
    font-size: 16px;
  }

  .header-right img {
    width: 25px;
    height: 25px;
  }
}
</style>
