---
layout: ../../layouts/BlogPostLayout.astro
title: Burger menu button with close animation
author: Julian Schäfer
authorRef: https://github.com/Theiaz
description: Selfmade burger menu button with close animation
heroImage:
heroImageAlt:
publishDate: 08 July 2022
draft: false
keywords: ["CSS"]
---

References: https://www.compiled.blog/

```javascript
<template>
  <button class="p-2" @click="isDisplayed = !isDisplayed">
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

const isDisplayed = ref(false);
</script>

<style scoped>
.top-stroke,
.bottom-stroke {
  transition: transform 250ms cubic-bezier(0.2, 0.6, 0.3, 1);
}

.top-stroke {
  transform: translateY(-5px);
}

.top-stroke--active {
  transform: translateX(3.5px) translateY(1px) rotate(-135deg);
}

.bottom-stroke {
  transform: translateY(5px);
}

.bottom-stroke--active {
  transform: translateX(3.5px) translateY(-1px) rotate(135deg);
}
</style>

```
