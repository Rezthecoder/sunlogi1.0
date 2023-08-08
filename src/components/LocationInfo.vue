<script>
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";
import Location from "../components/Location.vue";
export default {
  components: {
    Footer,
    MyHeader,
    Location
  },

};
// console.log(Footer.msg1);
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
       
        <div class="card">
          <MyHeader msg="ロケーション情報"/>
          <div class="card-body p-lg-5">
          
            <div class="table-responsive">
              <table class="table table-bordered table-sm"> <!-- Added 'table-sm' class for smaller table size -->
                <thead>
                  <tr>
                    <th scope="col">商品名</th>
                    <th scope="col">実在庫数</th>
                    <th scope="col">販売期限</th>
                    <th scope="col">出庫フラグ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>名前0001111111111</td>
                    <td>数量</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                  <tr>
                    <td>名前0001</td>
                    <td>数量</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                  <tr>
                    <td>名前0001</td>
                    <td>数量</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                  <tr>
                    <td>名前0001</td>
                    <td>数量</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                </tbody>
              </table>
            </div>
        
          </div>
        
        </div>
        <Footer msg1="戻る" msg2="完了" :msg3="'/location'" :msg4="'/locationKanryo'" ></Footer>
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
