---
layout: ../layouts/Layout.astro
title: "What are micro-frontends?"
next: { name: "Pros and Cons", url: "/prosCons" }
---

# What are Micro-frontends?

Micro-frontends is the application of the Microservices architecture in the frontend world.

## So, what are Microservices?

Microservices, is an architectural style that structures an application as a collection of services that are:

- Independently deployable
- Loosely coupled

Services are typically organized around business capabilities. Each service is often owned by a single, small team.

## Design considerations

But what’s critically important is designing a good service architecture:

- Identifying services
- Defining their responsibilities
- Their APIs and collaborations.

If you get it wrong you risk creating a distributed monolith, which will slow down software delivery.

## So, what are Micro-frontends?

Micro-frontends are basically decoupled frontends. Each `micro`:

- Has a specific responsibility
- Is isolated (no shared state)
- Is deployed independently
- Is technology agnostic
