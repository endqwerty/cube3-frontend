# Cube3

[![codecov](https://codecov.io/gh/endqwerty/cube3-frontend/branch/main/graph/badge.svg)](https://codecov.io/gh/endqwerty/cube3-frontend)

[![Coverage Status](https://coveralls.io/repos/github/endqwerty/cube3-frontend/badge.svg?branch=main)](https://coveralls.io/github/endqwerty/cube3-frontend?branch=main)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

This project is intended to be a [CubeTutor](https://www.cubetutor.com/) replacement as the original maintainer of CubeTutor is unable to continue

## Design and development

This project is early in its development. Core framework and architecture is still being setup and will likely change several times during early development.

The guiding principle is to attempt to stay within optimal Angular and Firebase development practices

CircleCI is the intended CI platform and will be added eventually

Features should mimic what exists in Cubetutor at a high level

* CRUD functions for Cubes
* user account management
* ownership of cubes
* cube update/changelog
* MTG card viewing
* Cube card version selection (low priority)
* custom card version uploading (low priority)
* virtual cube draft (low priority)
* draft bots (low low priority) (high high effort)
* Cubetutor import
  * cube
  * history
  * custom artwork
  * draft history

Actual implementation should follow Material UI and general UX best practices in an attempt to intentionaly design the UI.
The interface should not make it harder for the user to perform core functions.

## Requirements

* Angular CLI
* Firebase CLI

## Development

### Special Note about Node

NVM is the recommended Node version manager. A `.nvmrc` file is included. You should be able to run `nvm install` and be directed to the supported Node version.
If not, the recommended development verion is Node 12.16.1, however, development should attempt to ensure compatibility across all versions of Node > 10.

### Local dev server for minimal work

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Local dev server with full functionality

Run `ng build --watch` and `firebase emulators:start` together and use the server provided by firebase for an app that includes auth, storage, etc

`firebase serve` can be an alternative if db and auth functions aren't needed.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
`ng build --watch` is used for local dev servers in conjunction with firebase.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Recommended dev workflow

Keep the following running at all times

* `ng build --watch`
* `firebase emulators:start`
* `ng test`

You need to restart these if files are deleted or new files are added to the repo. The watchers will cache and watch only the list of files found on first execution.

Run periodically and ensure passing before PR merges

* `ng e2e`
* `ng lint`

### CI

All CI commands should be npm scripts.
CI commands in CircleCI's config.yml should not include params or args.
All params or args should be in npm scipts that are prepended with `ci-`
All devs should be able to validate exactly how tests are executed on CI by looking for npm scripts that start with `ci-`
Be aware that setup and configs are often still in CircleCI's `.circleci/config.yml` file.
CircleCI config should be designed to make use of CircleCI's caching as much as reasonable to speed up tests and ensure build speed.

## Angular CLI Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
