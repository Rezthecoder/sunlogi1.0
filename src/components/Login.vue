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
                            class="img-fluid profile-image-pic img-thumbnail rounded-circle my-3 custom-image" width="200px"
                            alt="profile" />
                    </div>
                    <form class="card-body p-lg-5">
                        <div class="form-group mb-3 ">
                            <label class="label" for="name">ログインID</label>
                            <input type="text" class="form-control" placeholder="" required="" />
                        </div>
                        <div class="form-group mb-3 ">
                            <label class="label" for="name">パスワード</label>
                            <input type="text" class="form-control" placeholder="" required="" />
                        </div>
                        <p class="text-center text-danger"> ログインできない場合はシステム管理者にお問い合わせください</p>
                        
                        <div class="text-center">
              <button type="submit" class="btn btn-primary">ログイン</button>
            </div>
                    </form>
                    <Footer msg1="終了" msg2="ff" ></Footer>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
/* .nologin {
    display: flex;
    font-size: 10px;
    margin-left: 6px;
    margin-top: 12px;
    justify-content: center;
    align-items: center;
    color: red;
}

.custom-image {
    margin-top: 65px;
    margin-left: 65px;
}

.custom-input {
    height: 34px;
    margin: 6px 7px;
    width: 190px;
}

.custom-pass {
    width: 190px;
    height: 33px;
    margin: 5px;
}

.btn-color {
    background-color: blue;
    color: #fff;
}

.btn {
    font-size: 13px;
    margin: 12px auto;
}

.cardbody-color {
    background-color: #ebf2fa;
}

a {
    text-decoration: none;
} */
</style>
