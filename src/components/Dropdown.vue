<script>
import Footer from "../components/Footer.vue";
export default {
  components: {
    Footer, // Register the Footer component
  },
};
</script>

<template>
  <div class="soko">
    <label for="soko-names">倉庫選択&nbsp;&nbsp; </label>
    <select name="soko-names" id="soko-names">
      <option value="rigatoni">1000</option>
      <option value="dave">2000</option>
      <option value="pumpernickel">3</option>
      <option value="reeses">4</option>
    </select>
  </div>
  <Footer/>
</template>

<style>
/* Add your custom CSS styles for the dropdown here */
.soko {
  display: flex;
  justify-items: center;
  align-items: center;
  font-size: 24px;
}
#soko-names {
  width: 100px;
  height: 27px;
}
</style>
