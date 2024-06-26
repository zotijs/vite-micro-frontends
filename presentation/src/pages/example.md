---
layout: ../layouts/Layout.astro
title: "The Example"
previous:
  { name: "Module Federation", url: "/vite-micro-frontends/moduleFederation" }
next: { name: "Pros and Cons", url: "/vite-micro-frontends/prosCons" }
---

# The Example

Just for the shake of the example we have split the application into a single `host` and multiple `remotes`. The `host` acts as the wrapper, the main application that renders all the micro-frontends and the `remotes` act as the independent applications that share their modules.

## Vite Plugin Federation

[vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) was used to configure the micro-frontend applications (`webpack` no thank you).

`remotes/header/vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [
  ...
    federation({
      name: "header_app",
      filename: "headerRemoteEntry.js",
      exposes: {
        "./Header": "./src/components/header/Header",
      },
      shared: ["clsx", "react", "react-dom"],
    }),
  ],
...
});
```

The interesting parts of the above configuration are:

- `exposes`: the modules that are exposed by the remote application
- `shared`: The dependencies that are shared between the independent applications. If `react` is needed in more than one applications, this module will be downloaded once and shared between them.

`host/vite.config.ts`:

```typescript
export default defineConfig({
  plugins: [
...
    federation({
      name: "app",
      remotes: {
        remoteHeader: "http://localhost:5001/assets/headerRemoteEntry.js",
        remoteFooter: "http://localhost:5002/assets/footerRemoteEntry.js",
        remoteCounter: "http://localhost:5003/assets/counterRemoteEntry.js",
      },
      shared: ["@reduxjs/toolkit", "react", "react-dom", "react-redux"],
    }),
  ],
...
});
```

The interesting part of the above configuration is:

- `remotes`: The name and the location of the build of the application that exposes its modules

## Example Structure

As mentioned previously the application has a `host` and multiple `remotes` split based on the "responsibility" of each application.

In detail:

- `Header`: A react application from where we are going to import a `Header` component. This application uses `window.postMessage` to publish events for the color mode of the entire application, that all other micro-frontends subscribe to.
- `Footer`: A react application from where we are going to import a `Footer` component.
- `Counter`: A react application from where we are going to import a `Counter` component. This is a stateful component that uses redux as the state management tool. In order to have a shared state between this remote and the host we are going to inject the counter reducer into the host's store. More info [this](https://github.com/module-federation/module-federation-examples/tree/master/redux-reducer-injection) webpack module federation example.
