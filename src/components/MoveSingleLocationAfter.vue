<script>
import Footer from "./Footer.vue";
import MyHeader from "./MyHeader.vue";
import BarcodeForm from "./BarcodeForm.vue";
import LocationFormAfter from "./LocationFormAfter.vue";
export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
    BarcodeForm,
    LocationFormAfter,
  },
};

</script>

<template>
  
  <div class="container ">
   
    <div class="row">
      
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="ロケーション移動(移動後)"/>
          <div class="card-body p-lg-5">
            <div class="text-center">
              <!-- Removed the inner row and adjusted column classes -->
              <div class="form-group row mb-3">
          
               <LocationFormAfter class="form"/>


              </div>
            </div>
          </div>
          <Footer msg1="戻る" msg2="確定" :msg3="'/moveSingleLocationBefore'" :msg4="'/moveSingleLocationKanryou'"></Footer>
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
