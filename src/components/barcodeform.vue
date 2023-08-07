<script setup>

defineProps({
  msg: String,
})





</script>





<template>


  <div class="input-group">
    <span class="input-group-text col-5">{{msg}}</span>
    <input class="col-7" type="hidden" autofocus v-model="input" v-on:keyup.enter="onKeyupEnter">
    <input class="col-7" type="text" v-bind:value="input" readonly>
  </div>


</template>

<style scoped>
/* .Form {

 max-width:100%;
margin:0 auto;
}
@media screen and (max-width: 600px) {
  .Form {
  margin:0 auto;
  max-width:100%;
  }
}
.Form-Item {

  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  display: flex;
  align-items: center;
}
@media screen and (max-width: 600px) {
  .Form-Item {
    padding-left: 14px;
    padding-right: 14px;
    padding-top: 10px;
    padding-bottom: 16px;
    flex-wrap: wrap;
  }
}
.Form-Item-Label {
  width: 100%;
  max-width: 248px;
  letter-spacing: 0.05em;
  font-weight: bold;
  font-size: 18px;
  
}
@media screen and (max-width: 600px) {
  .Form-Item-Label {
    max-width: inherit;
    display: flex;
    align-items: center;
    font-size: 16px;
   
  }
}
.Form-Item-Label.isMsg {
  margin-top: 8px;
  margin-bottom: auto;
  align-items:center;
}
@media screen and (max-width: 600px) {
  .Form-Item-Label.isMsg {
    margin-top: 0;
    align-items:center;
  }
}


.Form-Item-Label-Required {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  background: #f34eae;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 600px) {
  .Form-Item-Label-Required {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}

.Form-Item-Label-Required2 {
  border-radius: 6px;
  margin-right: 8px;
  padding-top: 8px;
  padding-bottom: 8px;
  width: 48px;
  display: inline-block;
  text-align: center;
  color: #fff;
  font-size: 14px;
}
@media screen and (max-width: 600px) {
  .Form-Item-Label-Required2 {
    border-radius: 4px;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 32px;
    font-size: 10px;
  }
}





.Form-Item-Input {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 48px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Input {
    margin-left: 0;
    margin-top: 5px;
    height: 40px;
    flex: inherit;
    font-size: 16px;
  }
}
.Form-Item-Textarea {
  border: 1px solid #ddd;
  border-radius: 6px;
  margin-left: 40px;
  padding-left: 1em;
  padding-right: 1em;
  height: 216px;
  flex: 1;
  width: 100%;
  max-width: 410px;
  background: #eaedf2;
  font-size: 18px;
}
@media screen and (max-width: 480px) {
  .Form-Item-Textarea {
    margin-top: 18px;
    margin-left: 0;
    height: 200px;
    flex: inherit;
    font-size: 16px;
  }
}
.Form-Btn {
  border-radius: 6px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  padding-top: 20px;
  padding-bottom: 20px;
  width: 600px;
  display: block;
  letter-spacing: 0.05em;
  background: #545454;
  color: #fff;
  font-weight: bold;
  font-size: 20px;
}
@media screen and (max-width: 480px) {
  .Form-Btn {
    margin-top: 24px;
    padding-top: 8px;
    padding-bottom: 8px;
    width: 160px;
    font-size: 16px;
  }
} */
</style>
