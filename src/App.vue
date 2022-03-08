<script setup>
import { ref } from "vue";

let counter = ref(0);

setInterval(() => {
  counter.value++;
}, 1000);
</script>

<template>
  <header></header>
  <!-- TODO: header nav bar-->
  <main>
    <router-view />
  </main>
</template>
