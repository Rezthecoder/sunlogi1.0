<script setup>
import { ref } from "vue";
const code = ref("");
const codename = ref("");
const number = ref("");

const numberPlus = () => {
  code.value = "18980";
  codename.value = "商品サンプル１";
  number.value = 1;
};
</script>

<template>
  <div class="input-group custom-form">
    <!--　コードを受け取り表示する。読み取り専用 -->
    <span class="input-group-text col-5">商品コード</span>
    <input
      class="col-7 form-control custom-input"
      type="text"
      :value="code"
      autofocus
      v-on:keyup.enter="numberPlus"
      id="code"
      readonly
      ref="locationInput"
    />
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">商品名</span>
    <input
      class="col-7 form-control custom-input"
      type="text"
      readonly
      id="codename"
      :value="codename"
    />
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">ロケーション</span>
    <input class="col-7 form-control custom-input" type="text" />
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">入庫数</span>
    <input
      class="col-7 form-control custom-input"
      type="number"
      id="number"
      :value="number"
    />
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">販売期限</span>
    <input class="col-7 form-control custom-input" type="text" value="なし" />
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">出荷フラグ</span>
    <select name="frag" class="col-7 form-control custom-input">
      <option value="可">可</option>
      <option value="不可">不可</option>
    </select>
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">ロット番号</span>
    <input
      class="col-7 form-control custom-input"
      type="text"
      value="設定なし"
    />
  </div>
  <div class="input-group custom-form">
    <span class="input-group-text col-5">備考</span>
    <input class="col-7 form-control custom-input" type="text" value="なし" />
  </div>
</template>
