<script>
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";
export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
  },
  mounted() {

this.$refs.locationInput.focus(); 
},
};
</script>

<template>
  
  <div class="container ">
   
    <div class="row">
      
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="一括ロケーション移動"/>
          <div class="card-body p-lg-5">
          
            <div class="text-center">
              <!-- Removed the inner row and adjusted column classes -->
              <div class="form-group row mb-3">
              
                <label class="col-sm-5 col-form-label" for="location">移動元ロケーション</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="locationmoto" required="true" ref="locationInput" />
                </div>
              </div>
                <div class="form-group row mb-3">
                <label class="col-sm-5 col-form-label" for="location">移動先ロケーション</label>
                <div class="col-sm-6">
                  <input type="text" class="form-control" id="locationsaki" required="true" ref="locationInput" />
                </div>
              </div>
            </div>
          </div>
          <Footer msg1="戻る" msg2="確定" :msg3="'/menu'" :msg4="'/ikatsuLocationIdouKanryo'"></Footer>
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
  
  .card-body{
    height:73vh;
  }
}



</style>
