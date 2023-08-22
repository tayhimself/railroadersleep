# Railroader Sleep

<details>
<summary>Table of Contents</summary>

- [Railroader Sleep](#railroader-sleep)
  - [Purpose](#purpose)
    - [Why a static site?](#why-a-static-site)
  - [Site Technical Requirements](#site-technical-requirements)
  - [Editing articles](#editing-articles)
  - [Editing the interactives](#editing-the-interactives)
  - [The Events Calendar](#the-events-calendar)
  - [Images](#images)
  - [Videos](#videos)
    - [Some research about railroad workers and sleep education](#some-research-about-railroad-workers-and-sleep-education)
  - [Editing Metadata](#editing-metadata)
  - [Editing the home page](#editing-the-home-page)
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

### Why a static site?
The static site allows for a number of benefits:
- The site can be hosted on any static site hosting service, including your own VM.
- The site can be edited by anyone with a github account, and the changes can be reviewed and approved by the site owner.
- The site can be edited using markdown, which is a simple text format that is easy to learn.
- The site can be edited using a CMS like WordPress, but that would be a lot of work for this project.
- Performance is better than a CMS like WordPress, because the site is pre-built and served as static files. There are no database calls or server side rendering. The site is also served from a CDN, which is faster than a single server.
- No database and static files means lower security risk.

##  Site Technical Requirements
- The site is built with Astro (https://astro.build/), a static site generator that uses any front end framework. Documents can be managed using .md and .mdx files. Astro can also be linked to a CMS like WordPress, but that would be a lot of work for this project.
- The site is hosted on Netlify (https://www.netlify.com/), a static site hosting service. Any static site hosting service can be used, including your own VM.
- The dependencies are managed using pnpm (https://pnpm.io/), a package manager that is similar to npm. You can use npm if you prefer.


## Editing articles

-	Editing files on github is explained here https://docs.github.com/en/repositories/working-with-files/managing-files/editing-files
-	All the articles are in the `data/` folder and can be edited there.
-	At the beginning of each file, the metadata can also be edited and updated if assets need to be updated.
-	The file format is .mdx (https://mdxjs.com/docs/what-is-mdx/#markdown) but I would stick to simple markdown https://www.markdownguide.org/cheat-sheet/
-	Image assets are in `/src/assets` and in `/public`. You shouldn’t need to change them but FYI.

## Editing the interactives
Look at `src/pages/think-fast.astro` and `src/pages/caffeine-interactive.astro`. The bundles necessary to run the interactives are shown in the code, and the code and bundles are in the `public` folder. You can edit the code in the `public` folder and the next build will pick up your changes.

## The Events Calendar
The events calendar is set up using AirTable as a database, and an email is sent to the owner of the Table when a new event is added. The email contains a link to the AirTable record, and the owner can edit the record to add more information. The calendar is then updated every night once the site is rebuilt on github and deployed to Netlify.

## Images
Replace all the image assets that are carried over from the old site. THe resolution is too low for high resolution screens.

## Videos
Please let us know when you are ready to download videos from the beta site. We can enable downloads of our vimeo videos for you to download and upload to the new site.


### Some research about railroad workers and sleep education
- https://railroads.dot.gov/elibrary/work-schedules-and-sleep-patterns-railroad-train-and-engine-service-employees-passenger
- https://railroads.dot.gov/elibrary/information-and-communications-technology-survey-class-i-railroad-train-yard-and-engine
- https://www.cdc.gov/niosh/work-hour-training-for-nurses/part1.html

## Editing Metadata
Look for the `src/config.mjs` file. This is where all the metadata such as site name, title, description is stored. You can edit the metadata there and the next build will pick up your changes. See the file `src/components/core/MetaTags.astro` for how the metadata is used in the site.

## Editing the home page
This is a little complicated, but the home page is in `src/pages/index.astro`. You will see a number of components, that make up the index page. You can


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
