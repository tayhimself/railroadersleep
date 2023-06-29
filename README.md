# Railroader Sleep

<details>
<summary>Table of Contents</summary>

- [Railroader Sleep](#railroader-sleep)
  - [Purpose](#purpose)
    - [Some research about railroad workers and sleep education](#some-research-about-railroad-workers-and-sleep-education)
  - [Editing Metadata](#editing-metadata)
  - [Editing the home page](#editing-the-home-page)
  - [Editing articles](#editing-articles)
  - [Getting started](#getting-started)
    - [Project structure](#project-structure)
    - [Commands](#commands)
    - [Configuration](#configuration)
    - [Testing](#testing)
      - [Playwright](#playwright)
    - [Deploy](#deploy)
      - [Deploy to production (manual)](#deploy-to-production-manual)
  - [Acknowledgements](#acknowledgements)
  - [cleaning github diffs for pdf export](#cleaning-github-diffs-for-pdf-export)

</details>

<br>

## Purpose

A sample view for the [railroadersleep](https://railroadersleep.fra.dot.gov/improve/overview) FRA site.

Inspiration:
- https://www.volpe.dot.gov
- https://media.hopper.com
- https://startsleeping.org

### Some research about railroad workers and sleep education
- https://railroads.dot.gov/elibrary/work-schedules-and-sleep-patterns-railroad-train-and-engine-service-employees-passenger
- https://railroads.dot.gov/elibrary/information-and-communications-technology-survey-class-i-railroad-train-yard-and-engine
- https://www.cdc.gov/niosh/work-hour-training-for-nurses/part1.html

## Editing Metadata
Look for the `src/config.mjs` file. This is where all the metadata such as site name, title, description is stored. You can edit the metadata there and the next build will pick up your changes.
## Editing the home page
This is a little complicated, but the home page is in `src/pages/index.astro`. You will see a number of components, I\'ll try to explain what each one does.

- To be filled in

## Editing articles

-	Editing files on github is explained here https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
-	All the articles are in the `data/` folder and can be edited there. They are poorly named (page1,page2, etc.) but the metadata at the top can help explain what each file is.
-	At the beginning of each file, the metadata can also be edited and updated if assets need to be updated.
-	The file format is .mdx (https://mdxjs.com/docs/what-is-mdx/#markdown) but I would stick to simple markdown https://www.markdownguide.org/cheat-sheet/
-	Image assets are in `/src/assets` and in `/public`. You shouldn’t need to change them but FYI.

## Getting started

### Project structure


```
/
├── data/
|   └── blog/
|       ├── post-slug-1.md
|       ├── post-slug-2.mdx
|       └── ...
|   └── tours/
|       ├── apnea-introduction.md
|       ├── sleep-introduction.md
|       └── ...
├── public/
│   ├── robots.txt
│   └── favicon.ico
|   └── interactives ...
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

Any static assets, like images, can be placed in the `public/` directory if they do not require any transformation or in the `assets/` directory if they are imported directly.

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

Basic configuration file: `./src/config.mjs`, edit it to change the site name, origin, etc.


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

Automatically deploys to Netlify on push to main branch. Go to https://app.netlify.com/sites/railroadersleep/overview to see the status of the deploy.

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

## cleaning github diffs for pdf export
```javascript
document.querySelector("#repository-container-header").hidden = true
document.querySelector(".Subhead").hidden = true
document.querySelector(".position-relative, .js-header-wrapper").hidden = true
document.querySelector("#all_commit_comments").hidden = true
document.querySelector(".commit, .full-commit").hidden = true

document.querySelector(".Layout-sidebar, .overflow-y-auto, .hx_Layout--sidebar, .js-notification-shelf-offset-top").hidden = true

document.querySelector("div.thread-subscription-status").hidden = true
```
