<script>
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";
import Location from "../components/Location.vue";
import Syuka from "../components/Syuka.vue";
export default {
  components: {
    Footer,
    MyHeader,
    Location,
    Syuka
  },
  mounted() {
    const inputElement = document.getElementById("numberInput");
    
    inputElement.addEventListener("input", function() {
      // Remove leading zeros
      this.value = this.value.replace(/^0+/, "");

      // Ensure the value is within the range 1 to 100
      if (this.value < 0) {
        this.value = 0;
      } else if (this.value > 100) {
        this.value = 100;
      }

      // Limit the input to a maximum of three digits
      if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
      }
    });
  },

};
// console.log(Footer.msg1);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
       
        <div class="card">
          <MyHeader msg="出荷検品"/>
          <div class="card-body p-lg-5">
            <div class="text-center">
              <div class="form-group row mb-3">
                <label class="col-sm-5 col-form-label" for="location">出荷コード</label>
                <div class="col-sm-6" >
                <input type="text" autofocus class="form-control" id="location" />
              </div>
              </div>
              <div class="form-group row mb-3">
                <label class="col-sm-5 col-form-label" for="location">サイズ指定</label>
                <div class="col-sm-6 p-1 mr-3">
                  <select class="form-select btn btn-primary" aria-label="Default select example" size="2">
                       <option selected>選択してください</option>
                       <option value="1">030SS</option>
                       <option value="2">050宅コン</option>
                       <option value="3">060M</option>
                       <option value="4">080L</option>
                       <option value="5">100LM</option>
                       <option value="6">120LL</option>
                       <option value="7">1403L</option>
                       <option value="8">150</option>
                       <option value="9">160</option>
                       <option value="10">170</option>
                       <option value="11">180</option>
                       <option value="12">190</option>
                       <option value="13">200</option>
                       <option value="14">210</option>
                       <option value="14">220</option>
                       <option value="14">230</option>
                       <option value="14">240</option>
                       <option value="14">250</option>
               </select>
              </div>


               </div>
               <div class="form-group row mb-3">
                <label class="col-sm-5 col-form-label" for="location">個口指定</label>
                <div class="col-sm-6" >
                <!-- <input type="text" min="1" max="100" class="form-control"  pattern="^[0-9]+$"/>
                 -->
                 <input type="number" class="form-control" min="1" max="100" id="numberInput">





              </div>
              </div>
              </div>
          </div>
          <Footer msg1="戻る" msg2="確定" :msg3="'/menu'" :msg4="'/syukaKanryo'" ></Footer>

        </div>
      </div>
    </div>
  </div>
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
  
    .modoru{
        white-space: nowrap;
    }
  .card-body{
    height:fit-content;
  }
}

/* Add custom CSS to adjust the table width */
.table {
  width: 100%; /* Set the table width to 100% */
}

/* Custom CSS to reduce table font size and other properties */
.table-sm td, .table-sm th {
  font-size: 12px; /* Adjust font size as per your preference */
  padding: 0.2rem 0.5rem; /* Adjust padding as needed */
}
</style>
