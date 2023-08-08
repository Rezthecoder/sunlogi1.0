<template>
    <div>
      <h5>{{ hello }}</h5>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    hello: String,
  });
  </script>
  