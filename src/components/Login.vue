<script setup>


import Footer from "../components/Footer.vue";


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 offset-md-3">
                <div class="card my-5">
                    <div class="text-center">
                        <img src="../assets/logo.png"
                            class="img-fluid profile-image-pic  my-3 custom-image" width="200px"
                            alt="profile" />
                    </div>
                    <form class="card-body p-lg-5">
                        <div class="form-group mb-3 ">
                            <label class="label" for="name">ログインID</label>
                            <input type="text" class="form-control" placeholder=""  />
                        </div>
                        <div class="form-group mb-3 ">
                            <label class="label" for="name">パスワード</label>
                            <input type="text" class="form-control" placeholder=""  />
                        </div>
                        <p class="text-center text-danger"> ログインできない場合はシステム管理者にお問い合わせください</p>
                        
                        <div class="text-center">
              <button type="submit" class="btn btn-primary">ログイン</button>
            </div>
                    </form>
                    <Footer msg1="終了" msg2="" ></Footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
</style>
