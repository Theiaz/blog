---
layout: ../../layouts/BlogPostLayout.astro
setup: |
  import DarkModeToggle from '../../components/DarkModeToggle.vue'
title: Teil 2
author: Julian Schäfer
authorRef: https://github.com/Theiaz
description: This is so cool! and a very long text with some addtiotional characters and MMMMMMM monster mega wordddddddd!
heroImage:
heroImageAlt:
publishDate: 20 May 2022
draft: false,
keywords: ["hub", "fbubba"]
---

This is so cool! and a very long text with some addtiotional characters and MMMMMMM monster mega wordddddddd.

Do variables work {frontmatter.value * 2}?

```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}
```

Some custom JS: <DarkModeToggle client:load/>
