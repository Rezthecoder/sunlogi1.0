<script>
import Footer from "./Footer.vue";
import MyHeader from "./MyHeader.vue";
import BarcodeForm from "./BarcodeForm.vue";
import Form from "./Form.vue";
export default {
  components: {
    Footer, // Register the Footer component
    MyHeader,
    BarcodeForm,
    Form,
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 col-md-6 offset-md-3">
        <div class="card my-10 custom-card">
          <MyHeader msg="入庫新規登録" />
          <div class="card-body p-lg-5">
            <div class="text-center">
              <!-- Removed the inner row and adjusted column classes -->
              <div class="form-group row mb-3">
                <Form class="form" />
              </div>
            </div>
          </div>
          <Footer
            msg1="戻る"
            msg2="完了"
            :msg3="'/menu'"
            :msg4="'/tourokuKanryou'"
          ></Footer>
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

@media (width: 240px) and (height: 320px) {
  .form {
    height: 73vh;
  }
  .form {
    height: fit-content;
  }
  .input-group-text {
    font-size: 11px;
  }
  .form-control {
    font-size: 11px;
  }
}
</style>
