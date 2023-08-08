<script  >
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";
import Message from "../components/Message.vue";

export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
    Message,
  }
}

// defineProps({
//   kanryomsg:String
// })

</script>

<template>
  
  <div class="container ">
   
    <div class="row">
      
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="完了画面"/>
          <div class="card-body p-lg-5">
          
            <div class="text-center">
              <!-- Removed the inner row and adjusted column classes -->
              <div class="form-group row mb-3">
               <Message hello="商品が完了しました。"></Message>
              </div>
            </div>
         
          </div>
          <Footer msg1="" msg2="完了" :msg4="'/syohin'"></Footer>
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
  
  .kettei{
        white-space: nowrap;
    }
  .card-body{
    height:fit-content;
  }
}



</style>
