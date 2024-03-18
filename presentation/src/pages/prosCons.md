---
layout: ../layouts/Layout.astro
title: "Pros and Cons of Micro-frontends"
next: { name: "Monolith vs Micro-frontend", url: "/monolithVsMicrofrontend" }
previous: { name: "Intro", url: "/" }
---

# Pros and Cons

A micro-frontend architecture will introduce new challenges to your team and it is critical to decide if micro-frontends is a suitable solution for your problem. More info [here](https://microfrontend.dev/architecture/micro-frontends-pros-and-cons/). This [feature-slider](https://microfrontend.dev/) might also help you decide.

## Pros

- **Scalability**: Each frontend application or component can scale independently

- **Independent deployability**: Each frontend application or component can be developed and deployed independently, and may be able to fail in isolation

- **Team independence**: Each team developing a micro-frontend can make their own architecture and tech stack decisions

- **Faster time to value**: Independent deployability and teams, make it possible for them to iterate and ship faster,

- **Cost efficiency**: Scaling horizontally may reduce the total cost of ownership and computing, or capacity needs of the whole application

## Cons

- **Governance**: For the implementation -including the UI definitions- to remain consistent across the whole application, particularly across the many views when that may be a requirement, and for certain conventions to be respected there should be a strong and strict governance definition that may need to be enforced to all teams

- **Orchestration**: Orchestrating the deployment of decoupled components or micro-parts may require additional efforts, and even an additional piece of technology to maintain

- **State management**: State management is potentially the most challenging aspect of composition, since an out of sync state can cause the application to behave erratically and even expose security or privacy flaws

- **Routing**: Routing is one of the common challenges of application design, and it’s a very important aspect of both user-experience and data architecture. It is even more challenging when we’re orchestrating decoupled frontend experiences, particularly when the routes of nested components may need to be exposed to the user

- **Data architecture**: Together with state management, data architecture, particularly for transactional workloads, can suppose a major challenge
