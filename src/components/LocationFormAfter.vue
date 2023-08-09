<script setup>

// defineProps({
//   msg: String,
// })
import {ref} from 'vue'; 
const code = ref('');
const codename=ref('')
const lotnumber=ref('');
const expiredday=ref('');
const freestock=ref('');
const shippingfrag=ref('');


 code.value="18980";
 codename.value="A-2";

 lotnumber.value=112;
 expiredday.value="2025/04/30";
 freestock.value=21;
 shippingfrag.value="可";
//  const s= document.getElementById("code") ;
//  s.value="180234";
//  console.log("test");
//  const u=document.getElementById("codename") ;
//  u.value="商品サンプル１";





</script>





<template>


<div class="input-group custom-form">
  <!--　コードを受け取り表示する。読み取り専用 -->
  <span class="input-group-text col-5">商品コード</span>
  <input class="col-7 form-control custom-input" type="text" :value="code"  id="code" readonly >
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">ロケーション</span>
  <input class="col-7 form-control custom-input" type="text" id="codename">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">移動数量</span>
  <input class="col-7 form-control custom-input" type="number">
</div>

<div class="input-group custom-form">
  <span class="input-group-text col-5">販売期限</span>
  <input class="col-7 form-control custom-input" type="text" id="number" :value="expiredday">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">出荷フラグ</span>
  <select name="frag" class="col-7 form-control custom-input">
		<option :value="shippingfrag">{{ shippingfrag }}</option>
		
		</select>
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">ロット番号</span>
  <input class="col-7 form-control custom-input" type="text" :value="lotnumber">
</div>
<div class="input-group custom-form">
  <span class="input-group-text col-5">在庫</span>
  <input class="col-7 form-control custom-input" type="text" :value="freestock">
</div>


</template>

<style scoped>
@media screen and (max-width: 240px) {
  

  .input-group-text{
    font-size:10px;
  }
  .form-control{
    font-size:10px;
  }
}
</style>
