---
layout: ../../layouts/BlogPostLayout.astro
setup: |
  import DarkModeToggle from '../../components/features/DarkModeToggle.vue'
title: Title1
author: Julian Schäfer
authorRef: https://github.com/Theiaz
description: Hello Description!
heroImage:
heroImageAlt:
publishDate: 20 May 2022
draft: false
keywords: ["todo", "foo"]
---

This is so cool! and a very long text with some addtiotional characters and MMMMMMM monster mega wordddddddd.

Do variables work {frontmatter.value \* 2}?

```javascript
// Example JavaScript

const x = 7;
function returnSeven() {
  return x;
}
```

Some custom JS: <DarkModeToggle client:load/>
