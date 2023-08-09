<script>
import Footer from "./Footer.vue";
import MyHeader from "./MyHeader.vue";
import BarcodeForm from "./BarcodeForm.vue";
import LocationForm from "./LocationForm.vue";
export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
    BarcodeForm,
    LocationForm,
  },
};

</script>

<template>
  
  <div class="container ">
   
    <div class="row">
      
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="ロケーション移動(移動前)"/>
          <div class="card-body p-lg-5">
          
            <div class="text-center">
              <!-- Removed the inner row and adjusted column classes -->
              <div class="form-group row mb-3">
          
               <LocationForm class="form"/>


              </div>
            </div>
          </div>
          <Footer msg1="戻る" msg2="確定" :msg3="'/moveLocation'" :msg4="'/moveSingleLocationAfter'"></Footer>
        </div>
      </div>
    </div>
  </div>
  <!-- Example split danger button -->
</template>

<style>
/* Add your custom CSS styles for the dropdown here */
 /* .custom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
}  */


@media (width:240px) and (height:320px) {
  
  .form{
    height:73vh;
  }
  .form{
    height:fit-content;
  }
}



</style>
