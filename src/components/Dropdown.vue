<script>
import Footer from "../components/Footer.vue";
import MyHeader from "../components/MyHeader.vue";
export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="倉庫選択" />
          <div class="card-body p-lg-5">
            <div class="text-center">
              <div class="p-2">
                <select
                  class="form-select btn btn-primary"
                  aria-label="Default select example"
                >
                  <option selected>倉庫選択</option>
                  <option value="1">倉庫1</option>
                  <option value="2">倉庫2</option>
                  <option value="3">倉庫3</option>
                </select>
              </div>
              <div class="p-2">
                <select
                  class="form-select btn btn-primary"
                  aria-label="Default select example"
                >
                  <option selected>店舗選択</option>
                  <option value="1">店舗1</option>
                  <option value="2">店舗2</option>
                  <option value="3">店舗3</option>
                </select>
              </div>
            </div>
          </div>
          <Footer msg1="戻る" msg2="確定" msg3="/" msg4="/menu"></Footer>
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

@media (width: 240px) and (height: 320px) {
  .card-body {
    height: 73vh;
  }
}
</style>
