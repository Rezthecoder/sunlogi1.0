<script>
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";
export default {
  components: {
    Footer,
    MyHeader,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card">
          <MyHeader msg="商品情報"/>
          <div class="card-body p-lg-5">
           
            <div class="table-responsive">
              <table class="table table-bordered table-sm"> <!-- Added 'table-sm' class for smaller table size -->
                <thead>
                  <tr>
                    <th scope="col">商品名</th>
                    <th scope="col">実在庫数</th>
                    <th scope="col">フリー在庫数</th>
                    <th scope="col">販売期限</th>
                    <th scope="col">出荷フラグ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>ロケーション</td>
                    <td>数量</td>
                    <td>1</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                  <tr>
                    <td>ロケーション</td>
                    <td>数量</td>
                    <td>2</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                  <tr>
                    <td>ロケーション</td>
                    <td>数量</td>
                    <td>3</td>
                    <td>20220812</td>
                    <td>可</td>
                  </tr>
                 
                </tbody>
              </table>
            </div>
         
          </div>
          <Footer msg1="戻る" msg2="メニューへ" :msg3="'/syohin'" :msg4="'/menu'"></Footer>
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
