---
layout: ../../layouts/BlogPostLayout.astro
setup: |
  import DarkModeToggle from '../../components/DarkModeToggle.vue'
title: Title
author: Julian Schäfer
authorRef: https://github.com/Theiaz
description: Hello Description!
heroImage:
heroImageAlt:
publishDate: 20 May 2022
draft: false,
keywords: ["todo"]
---

This is so cool!

Do variables work {frontmatter.value \* 2}?

```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}
```

Some custom JS: <DarkModeToggle client:load/>
