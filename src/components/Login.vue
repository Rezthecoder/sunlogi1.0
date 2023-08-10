<script setup>


import Footer from "../components/Footer.vue";


</script>

<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-12 col-md-6 offset-md-3">
                <div class="card">

                    <form class="card-body p-lg-5">
                        <div class="text-center">
                        <img src="../assets/logo.png"
                            class="img-fluid profile-image-pic  my-3 custom-image" width="200px"
                            alt="profile" />
                    </div>
                        <div class="form-group mb-3 ">
                            <label class="label" for="name">ログインID</label>
                            <input type="text" class="form-control" placeholder="" required="true"  />
                        </div>
                        <div class="form-group mb-3 ">
                            <label class="label" for="name">パスワード</label>
                            <input type="text" class="form-control" placeholder=""   required="true" />
                        </div>
                        <p class="text-center text-danger"> ログインできない場合はシステム管理者にお問い合わせください</p>
                        
                        <div class="text-center">
                            <router-link to="/dropdown" style="text-decoration:none;"><button type="submit" class="btn btn-primary">ログイン</button></router-link>
              
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
