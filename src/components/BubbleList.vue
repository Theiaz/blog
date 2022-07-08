<template>
  <BaseBubble v-for="n in 10" :key="n" :x-pos="250" />
</template>

<script setup lang="ts">
import BaseBubble from "./BaseBubble.vue";
</script>
