<template>
  <button @click="toggleDark()">
    <span class="flex items-center gap-2">
      <MoonIcon v-if="isDark" />
      <SunIcon v-else />
      <span class="hidden sm:inline"> {{ isDark ? "Dark" : "Light" }}</span>
    </span>
  </button>
</template>
<script lang="ts" setup>
import { useDark, useToggle } from "@vueuse/core";
import MoonIcon from "./icons/MoonIcon.vue";
import SunIcon from "./icons/SunIcon.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
