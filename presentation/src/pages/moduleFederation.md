---
layout: ../layouts/Layout.astro
title: "Module Federation"
previous:
  {
    name: "Monolith vs Micro-frontend",
    url: "/vite-micro-frontends/monolithVsMicrofrontend",
  }
next: { name: "The Example", url: "/vite-micro-frontends/example" }
---

# Module Federation

While there are multiple approaches on how to achieve a horizontal split micro-frontend (e.g. [iframes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/iframe), [webcomponents](https://developer.mozilla.org/en-US/docs/Web/API/Web_components)) we will use [module-federation](https://module-federation.io/).

## What's Module Federation

Module federation is a feature, introduced in Webpack 5, that provides the ability to split an application into smaller, independently deployable modules that can be loaded on demand when they are needed.

> At its core, Module Federation is based on the idea of remote loading of JavaScript modules. This means that instead of having all the code for a single application loaded at once, the code can be split into smaller, independently deployable modules that can be loaded on demand when they are needed.

Multiple separate builds should form a single application. These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.
