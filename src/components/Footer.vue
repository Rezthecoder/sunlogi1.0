<template>
  <footer class="footer">
    <div class="buttoncontainer">
      <!-- Add your footer content here -->
      <div class="modoru">
        <a :href="msg3" style="color: white; text-decoration: none">
          {{ msg1 }}
        </a>
      </div>
      <div class="bluebox"></div>
      <div class="greenbox"></div>
      <div class="kettei">
        <!-- <a href="" target="_blank" style="color: white">{{ msg2 }}</a></div> -->
        <a :href="msg4" style="color: white; text-decoration: none">
          {{ msg2 }}
        </a>
      </div>
    </div>
    <p id="date">{{ currentDateTime }}</p>
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

.modoru {
  background-color: red;
  width: 200px;
  color: white !important;
  font-size: 27px;
  text-align: center;
  text-decoration: none;
}
.kettei {
  background-color: orange;
  width: 200px;
  color: white;
  font-size: 27px;
  text-align: center;
}

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
const dynamicRoute = "/location";

// Define props using defineProps function
import { defineProps } from "vue";
import { ref, onMounted, onUnmounted } from "vue";

const currentDateTime = ref("");

const updateCurrentDateTime = () => {
  const date = new Date();
  const year = date.getFullYear().toString().slice(-2);
  const month = ("00" + (date.getMonth() + 1)).slice(-2);
  const day = ("00" + date.getDate()).slice(-2);
  const hours = ("00" + date.getHours()).slice(-2);
  const minutes = ("00" + date.getMinutes()).slice(-2);
  const seconds = ("00" + date.getSeconds()).slice(-2);

  currentDateTime.value = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
};

const timer = setInterval(updateCurrentDateTime, 1000); // Update every second

onMounted(() => {
  updateCurrentDateTime(); // Update the date and time immediately when the component mounts
});

onUnmounted(() => {
  clearInterval(timer); // Cleanup the timer when the component is unmounted
});

defineProps({
  msg1: String,
  msg2: String,
  msg3: String,
  msg4: String,
});
</script>
