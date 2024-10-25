<template>
  <button aria-label="Darkmode Toggle" @click="toggleDark()">
    <MoonIcon v-if="isDark" class="hover:scale-110" />
    <SunIcon v-else class="hover:scale-110" />
  </button>
</template>
<script setup lang="ts">
import { useDark, useToggle } from "@vueuse/core";
import MoonIcon from "../icons/MoonIcon.vue";
import SunIcon from "../icons/SunIcon.vue";

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>
