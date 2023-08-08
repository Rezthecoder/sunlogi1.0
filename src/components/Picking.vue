<script>
import Footer from "./Footer.vue";
import MyHeader from "./MyHeader.vue";
export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
  },
};


</script>



<template>
  <div class="container ">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="ピッキング"/>
          <div class="card-body p-lg-5">
            <div class="text-center">
              <div class="dropdown mt-4 ">
                <button class="btn btn-primary " type="button"  aria-expanded="false">
                  倉庫名
                </button>
              </div>
              <div class="dropdown mt-4">
                <button class="btn btn-primary" type="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  WorkId
                </button>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item" href="#">1</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">2</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">3</a>
                  </li>
                  <li>
                    <a class="dropdown-item" href="#">4</a>
                  </li>
                </ul>
              </div>
             
            </div>
          </div>
          <Footer msg1="戻る" msg2="確定" :msg3="'/menu'" :msg4="'/pickinglist'" ></Footer>
        </div>
      </div>
    </div>
  </div>
  <!-- Example split danger button -->
</template>

<style>
/* Add your custom CSS styles for the dropdown here */
 .custom {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
} 

#soko-names {
  width: 100px;
  height: 27px;
} 

@media (width:240px) and (height:320px) {
  
  .card-body{
    height:73vh;
  }
}



</style>
