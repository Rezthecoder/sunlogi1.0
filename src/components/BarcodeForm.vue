<script setup>
defineProps({
  msg: String,
});
Quagga.init(
  {
    inputStream: { type: "LiveStream" },
    decoder: {
      readers: [
        {
          format: "ean_reader",
          config: {},
        },
      ],
    },
  },
  (err) => {
    if (!err) {
      Quagga.start();
    }
  }
);

Quagga.onDetected((result) => {
  let code = result.codeResult.code;
  // ここでコードを受け取って、何かしらの処理(例えば、楽天市場APIを使用して商品検索等)
});
</script>

<template>
  <div class="input-group">
    <span class="input-group-text col-5">商品コード</span>
    <input class="col-7" type="text" value="" readonly id="this" />
  </div>
</template>
