<template>
  <button class="p-3 nav-button" @click="isDisplayed = !isDisplayed">
    <div
      class="top-stroke block w-[28px] h-[2px] bg-light-secondary dark:bg-dark-secondary"
      :class="{ 'top-stroke--active': isDisplayed }"
    ></div>
    <div
      class="bottom-stroke block w-[28px] h-[2px] bg-light-secondary dark:bg-dark-secondary"
      :class="{ 'bottom-stroke--active': isDisplayed }"
    ></div>
  </button>
</template>

<script setup>
import { ref, watch } from "vue";

const emit = defineEmits(["isDisplayed"]);

const isDisplayed = ref(false);

watch(isDisplayed, () => {
  emit("isDisplayed", isDisplayed);
});
</script>

<style scoped>
.top-stroke,
.bottom-stroke {
  transition: transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1);
}

.top-stroke {
  transform: translateY(-6px);
}

.top-stroke--active {
  transform: translateX(3.5px) translateY(1px) rotate(-135deg);
}

.bottom-stroke {
  transform: translateY(6px);
}

.bottom-stroke--active {
  transform: translateX(3.5px) translateY(-1px) rotate(135deg);
}

.nav-button:hover div {
  @apply bg-light-accent dark:bg-dark-accent;
}
</style>
