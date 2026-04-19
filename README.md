# Two Ships Passing In The Night - DevOps Project

## Description

This project is part of a DevOps course.
The goal is to implement a complete CI/CD pipeline for a game made by independants developpers.

The game is automatically:

* tested
* linted
* audited
* built
* deployed

---

## Play the game

Available online via GitHub Pages
https://alexandrebarette.github.io/SpaceShips/

---

## Run locally

### Install dependencies

```bash
npm install
```

### Run dev server

```bash
npm run dev
```

---

## Build the project

```bash
npm run build
```

---

## Run tests

```bash
npm test
```

---

## Run with Docker (need Docker Desktop)

### Build image

```bash
docker build -t spaceships .
```

### Run container

```bash
docker run -p 8080:80 spaceships
```

Then open: http://localhost:8080

---

## ⚙️ CI/CD Pipeline

GitHub Actions automatically:

* runs lint (ESLint)
* runs tests (Vitest)
* runs security audit (`npm audit`)
* builds the project
* deploys to GitHub Pages

---

## Technologies

* JavaScript
* Vite
* Vitest
* ESLint
* Docker (Nginx)
* GitHub Actions

---

## DevOps Goals

* Automate testing and deployment
* Ensure code quality
* Improve reliability
* Enable reproducible builds

---

## Notes

* Lint errors are non-blocking in CI
* Security audit is included but non-blocking
