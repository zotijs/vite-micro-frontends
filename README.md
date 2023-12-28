# Vite Micro Frontends

An example app that uses [vite-plugin-federation](https://github.com/originjs/vite-plugin-federation) and react to produce a micro-frontend application using the module federation paradigm.

## Module Federation

Multiple separate builds should form a single application. These separate builds act like containers and can expose and consume code between builds, creating a single, unified application.

This is often known as Micro-Frontends, but is not limited to that.

More info in webpack [concepts](https://webpack.js.org/concepts/module-federation/)

A small intro module federations can also be found in this dev [article](https://dev.to/marais/webpack-5-and-module-federation-4j1i) by Marais Rossouw.

## Remotes

The micro apps that will be used by the host. This structure, with a single host and multiple remotes, is being used just for convenience. With module federation all the separate applications can use modules shared by other applications.

### Header

A react application for where we are going to import a `Header` component.

Generated using `pnpm create vite header --template react-swc-ts`

### Footer

A react application for where we are going to import a `Footer` component.

Generated using `pnpm create vite footer --template react-swc-ts`

## Host

A react application that will act like the host, the application that will combine all the remotes.

Generated using `pnpm create vite host --template react-swc-ts`

## Commands (Top Level)

- `build`: builds the host and the remotes of the workspace
- `serve`: serves the host and the remotes of the workspace
- `build:remotes`: builds only the remotes of the workspace
- `serve:remotes`: serves only the remotes of the workspace
- `dev:host`: run host in dev mode
- `stop`: kills the processes of the defined ports
- `add:module`: adds a module recursively in every project of a workspace, excluding the root project, [docs](https://pnpm.io/cli/recursive). Usage: `pnpm add:module <module_name>`.

## Resources

- https://microfrontend.dev/
- react-vite module federation example: https://github.com/originjs/vite-plugin-federation/tree/main/packages/examples/react-vite
- vite guides: https://vitejs.dev/guide/
- pnpm workspaces: https://pnpm.io/workspaces
