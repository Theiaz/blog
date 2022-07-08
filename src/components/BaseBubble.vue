<template>
  <div
    class="circle animateBubble absolute -z-10 h-20 w-20 bg-gradient-to-br from-light-primary to-light-secondary right-20"
  ></div>
</template>

<script setup>
const props = defineProps({
  xPos: {
    type: Number,
    default: 0,
  },
});
</script>

<style scoped>
@keyframes animateBubble {
  0% {
    top: 100%;
  }
  100% {
    top: -10%;
  }
}

@keyframes sideWays {
  0% {
    margin-left: 0px;
  }
  100% {
    margin-left: 50px;
  }
}

.circle {
  clip-path: circle(50%);
  animation: animateBubble 5s linear infinite,
    sideWays 2s ease-in-out infinite alternate;
}
</style>
