# Cube3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## Requirements

* Angular CLI
* Firebase CLI

## Development

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

## Angular CLI Help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
