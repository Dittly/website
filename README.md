# Dittly

[![Build Status](https://travis-ci.org/Dittly/website.svg?branch=master)](https://travis-ci.org/Dittly/website) [![Coverage Status](https://coveralls.io/repos/github/Dittly/website/badge.svg?branch=master)](https://coveralls.io/github/Dittly/website?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/Dittly/website.svg)](https://greenkeeper.io/)

## Getting Started

1. Install all project dependencies (we use [yarn](https://yarnpkg.com/en/), make sure you have it installed):
    ```
    yarn
    ```
1. Start the development server
    ```
    yarn dev
    ```
1. Visit [http://localhost:3000](http://localhost:3000/)

## What we care about

At Dittly, we care about

**Our customers**. They expect a platform that

* solves real problems
* is simple to use
* works as expected
* is available 24/7

**Our team**. To exceed what our customers expect, we

* take feedback very seriously
* make data-driven decisions
* write perfectly tested code, no exceptions
* monitor everything

## Development

### Naming Conventions

The following naming conventions apply:

| Pattern        | Variables      | Type                                                                                     |
| -------------- | -------------- | ---------------------------------------------------------------------------------------- |
| `*-sc.js`      | `mainHeaderSC` | Styled-Component.                                                                        |
| `*-stories.js` | N/A            | Storybook stories.                                                                       |
| `*-gq.js`      | N/A            | GrahQL definition file.                                                                  |
| `pages/*`      | N/A            | Top-level, lightweight page components. Use `with-auth` or `with-data` HOCs if required. Define URL structure. |
| `src/*`        | N/A            | Components used in `pages/*`. Deal with GraphQL queries, loading state, etc. here.       |
| `components/*` | N/A            | Pure React components, ideally functional components.                                    |

### Tech Stack

Mainly Javascript (ES6+). For 3rd party services, see below.

* **[Next.js](https://github.com/zeit/next.js)**: A minimalistic framework for server-rendered React applications.
* **[styled-components](https://www.styled-components.com)**: CSS in JS library we use for styling.
* **[GraphQL](http://graphql.org/learn)**: Our API query language, in lieu of a REST API.

### Tools

The following development tools help with code quality, formatting, and general automation:

* **[Jest](https://facebook.github.io/jest)**: Main test framework.
  * Run with `yarn test`
* **[ESLint](https://eslint.org)**: Helps with code quality, avoids common bugs and enforces best practices.
  * Run with `yarn lint`
* **[lint-staged](https://github.com/okonet/lint-staged)**: Run commands against staged files.
  * Runs automatically as a `git precommit` hook.
* **[Prettier](https://github.com/prettier/prettier)**: Automatically format source files.
  * Runs automatically as part of `lint-staged` and `ESLint`, see above.
* **[Storybook](https://storybook.js.org)**: An interactive style guide.
  * Run with `yarn storybook`

## 3rd Party Services

We rely on 3rd party services to automate as many tasks as possible.

* **[Travis](https://travis-ci.org/Dittly)**: Continuous integration service to run tests.
* **[Coveralls](https://coveralls.io/github/Dittly/website)**: Test coverage reports.
* **[Greenkeeper](https://greenkeeper.io/)**: Automatically monitors and updates NPM dependencies.
* **[Now](https://zeit.co/now)**: Deployment infrastructure.
* **[Graphcool](https://www.graph.cool/)**: GraphQL backend.
