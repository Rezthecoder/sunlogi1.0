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

};
// console.log(Footer.msg1);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
       
        <div class="card">
          <MyHeader msg="出荷検品リスト"/>
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
                  <select class="form-select btn btn-primary" aria-label="Default select example">
                       <option selected>サイズ指定</option>
                       <option value="1">030SS</option>
                       <option value="2">050宅コン</option>
                       <option value="2">050宅コン</option>
               </select>
              </div>


               </div>
               <div class="form-group row mb-3">
                <label class="col-sm-5 col-form-label" for="location">個口指定</label>
                <div class="col-sm-6" >
                <input type="number" min="1" max="100" class="form-control"  pattern="^(?:[1-9][0-9]?|100)$"/>
              </div>
              </div>
              </div>
          </div>
          <Footer msg1="戻る" msg2="完了" :msg3="'/syuka'" :msg4="'/syukaKanryo'" ></Footer>

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
