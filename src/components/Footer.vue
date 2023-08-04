
<template>
  
  <footer class="footer">
    <div class="buttoncontainer">
      
      <!-- Add your footer content here -->
      <div class="modoru">
        <a href="" target="_blank" style="color: white">{{ msg1 }}</a></div>
      <div class="bluebox"></div>
      <div class="greenbox"></div>
      <div class="kettei">
        <a href="" target="_blank" style="color: white">{{ msg2 }}</a></div>
      
      </div>
      <p id="date"></p>
 
  </footer>
</template>
/* components/Footer.vue */

<style>
#date {
  margin: 0px;
  text-align: end;
}

.buttoncontainer {
  width: auto;
  display: flex;
  height: 50px;
}

/* Responsive CSS for 240x320 resolution */
/* @media (min-width: 240px) and (max-width: 320px) {
  .buttoncontainer {
    max-width: 100vh;

  }
} */

.modoru {
    background-color: red;
    width: 200px;
    color: white;
    font-size: 27px;
    text-align: center;
}
.kettei {
    background-color: orange;
    width: 200px;
    color: white;
    font-size: 27px;
    text-align: center;
}
/* .container {
    max-width: 100%;
    margin: 0;
    height: 170vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
} */
/* Optionally, add styles to center individual elements inside the container */
.container p {
  text-align: center;
  margin: 10px 0;
}

.bluebox {
  background-color: skyblue;
  width: 200px;
}

.greenbox {
  background-color: green;
  width: 200px;
}
</style>


<script setup>


    // Define props using defineProps function
    import { defineProps } from 'vue';

defineProps({
  msg1:String,
  msg2:String
})


document.addEventListener("DOMContentLoaded", function () {
  const dateDisplayElement = document.getElementById("date");

  var date = new Date();

  var month = ("00" + (date.getMonth() + 1)).slice(-2);
  var day = ("00" + date.getDate()).slice(-2);
  var year = date.getFullYear();
  var hours = ("00" + date.getHours()).slice(-2);
  var minutes = ("00" + date.getMinutes()).slice(-2);
  var seconds = ("00" + date.getSeconds()).slice(-2);

  var dateStr =
    year +
    "/" +
    month +
    "/" +
    day +
    " " +
    hours +
    ":" +
    minutes ;
  // Update the content of the element with the formatted date string
  dateDisplayElement.textContent = dateStr;
});
</script>