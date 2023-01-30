# Railroader Sleep

<details>
<summary>Table of Contents</summary>

- [Railroader Sleep](#railroader-sleep)
  - [Purpose](#purpose)
  - [Getting started](#getting-started)
    - [Project structure](#project-structure)
    - [Commands](#commands)
    - [Configuration](#configuration)
    - [Testing](#testing)
      - [Playwright](#playwright)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
  - [Acknowledgements](#acknowledgements)

</details>

<br>

## Purpose

A sample view for the [railroadersleep](https://railroadersleep.fra.dot.gov/improve/overview) FRA site. Inspiration is below.
- https://www.volpe.dot.gov
- https://media.hopper.com


## Getting started

### Project structure



```
/
├── data/
|   └── blog/
|       ├── post-slug-1.md
|       ├── post-slug-2.mdx
|       └── ...
├── public/
│   ├── robots.txt
│   └── favicon.ico
├── src/
│   ├── assets/
│   │   ├── images/
|   |   └── styles/
|   |       └── base.css
│   ├── components/
│   │   ├── atoms/
│   │   ├── blog/
│   │   ├── core/
|   |   └── widgets/
|   |       ├── Header.astro
|   |       ├── Footer.astro
|   |       └── ...
│   ├── layouts/
│   |   |── BaseLayout.astro
│   |   └── ...
│   ├── pages/
│   |   ├── [...blog]/
|   |   |   ├── [...page].astro
|   |   |   └── [slug].astro
│   |   ├── [...categories]/
|   |   |   └── [category]/
|   |   |       └── [...page].astro
│   |   ├── [...tags]/
|   |   |   └── [tag]/
|   |   |       └── [...page].astro
│   |   ├── index.astro
|   |   ├── 404.astro
│   ├── utils/
│   └── config.mjs
├── package.json
└── ...
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.


This site is largely based on the AstroWind template.
<br>

### Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                       |
| :---------------- | :------------------------------------------- |
| `pnpm install`     | Installs dependencies                        |
| `pnpm run dev`     | Starts local dev server at `localhost:3000`  |
| `pnpm run build`   | Build your production site to `./dist/`      |
| `pnpm run preview` | Preview your build locally, before deploying |

<br>

### Configuration

Basic configuration file: `./src/config.mjs`

```javascript
export const SITE = {
  name: "Example",

  origin: "https://railroadersleep.netlify.app/",
  basePathname: "", // Change this if you need to deploy to Github Pages, for example

  title: "Example - This is the homepage title of Example",
  description: "This is the homepage description of Example",

  googleAnalyticsId: false, // or "G-XXXXXXXXXX",
  googleSiteVerificationId: false // or some value,
};

export const BLOG = {
  disabled: false,
  postsPerPage: 4,

  blog: {
    disabled: false,
    pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
  },

  post: {
    disabled: false,
    pathname: '', // empty for /some-post, value for /pathname/some-post
  },

  category: {
    disabled: false,
    pathname: 'category', // set empty to change from /category/some-category to /some-category
  },

  tag: {
    disabled: false,
    pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
  },
};


```

<br>

### Testing
#### Playwright
Install using  `pnpm dlx create-playwright`

  pnpm dlx playwright test
    Runs the end-to-end tests.

  pnpm dlx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  pnpm dlx playwright test example
    Runs the tests in a specific file.

  pnpm dlx playwright test --debug
    Runs the tests in debug mode.

  pnpm dlx playwright codegen
    Auto generate tests with Codegen.

Review the report using`pnpm dlx playwright show-report`


We suggest that you begin by typing:

    pnpm dlx playwright test

And check out the following files:
  - ./tests/example.spec.ts - Example end-to-end test
  - ./tests-examples/demo-todo-app.spec.ts - Demo Todo App end-to-end tests
  - ./playwright.config.ts - Playwright Test configuration

Visit https://playwright.dev/docs/intro for more information. ✨

### Deploy

#### Deploy to production (manual)

You can create an optimized production build with:

```shell
pnpm run build
```

Now, your website is ready to be deployed. All generated files are located at
`dist` folder, which you can deploy the folder to any hosting service you
prefer.

<br>

## Acknowledgements

Modified from AstroWind, initially created by [onWidget](https://onwidget.com) and maintained by a community of [contributors](https://github.com/onwidget/astrowind/graphs/contributors).

