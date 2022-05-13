<template>
  <button @click="toggleDark()">
    <span class="flex items-center gap-2">
      <MoonIcon v-if="isDark" />
      <SunIcon v-else />
      {{ isDark ? "Dark" : "Light" }}
    </span>
  </button>
</template>
<script setup>
import { useDark, useToggle } from "@vueuse/core";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
