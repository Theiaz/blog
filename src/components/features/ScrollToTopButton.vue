<template>
  <Transition name="fade">
    <button
      v-show="isScrolled"
      class="fixed bottom-8 right-8 border-none rounded-full p-2 bg-light-secondary dark:bg-dark-secondary hover:bg-light-accent dark:hover:bg-light-accent"
      @click="scrollToTop"
    >
      <ChevronUpIcon
        class="text-light-primary dark:text-dark-primary"
      ></ChevronUpIcon>
    </button>
  </Transition>
</template>

<script setup>
import ChevronUpIcon from "../icons/ChevronUpIcon.vue";
import { ref, onMounted, onUnmounted } from "vue";

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

let isScrolled = ref(false);
function onScroll() {
  isScrolled.value = window.scrollY > 0;
}
onMounted(() => {
  isScrolled.value = window.scrollY > 0;
  window.addEventListener("scroll", onScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
