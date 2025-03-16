---
order: 1
title: Eino
description: Feature-rich book & movie tracker I created for myself ❤️
platform: [server, web, android]
link: https://eino.jankku.fi
github: https://github.com/Jankku/eino-web
logo: /eino.svg
screenshots: [./eino-web-books.png, ./eino-web-profile.png, ./eino-android.png]
gradient: eino
tags: [TS, React, Express]
features: 
  - TOTP two-factor authentication, JWT authorization
  - Email support using Mailtrap for password reset
  - Audit logging with optional Discord webhook support
  - CRUD actions and search for books/movies
  - Finna, Open Library and TMDB integrations for book/movie images
  - User profile with user information and statistics, share top books/movies, export/import data, delete account etc.
  - UI built using MUI, includes light and dark modes
  - Web frontend is unit and end-to-end tested with Vitest and Playwright respectively
  - Docker image built with GitHub Actions, released to ghcr.io and deployed with Docker Compose
  - Native Android application built with Kotlin
---
