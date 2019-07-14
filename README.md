# Angular Elements

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.1.

Angular elements are Angular components packaged as custom elements (also called Web Components), a web standard for defining new HTML elements in a framework-agnostic way.

The @angular/elements package exports a createCustomElement() API that provides a bridge from Angular's component interface and change detection functionality to the built-in DOM API.

[Angular Elements Overview](https://angular.io/guide/elements)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

Please note that when serving the app you just inject the ElementsModule and its components but not as Native Web Components. Please refer to the Build Angular Elements (Native Web Components) section below.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/angular-elements` directory. Use the `--prod` flag for a production build.

Please note that you can run directly `npm run build:prod` as we have added a custom script in the package.json file.
```bash
npm run build:prod
```

## Build Angular Elements (as Native Web Components)

Run `npm run build:elements` to build only the Angular Elements as native Web Components. The build artifacts will be stored in the `dist/elements` directory.
The build configuration of the Angular Elements is defined in a separate project elements in the angular.json.

```bash
npm run build:elements
```

## Polyfills

Please note that we have included a suite of polyfills supporting the [HTML Web Components specs](http://webcomponents.org/polyfills/) from this repository [https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs](https://github.com/webcomponents/polyfills/tree/master/packages/webcomponentsjs)

```bash
npm install @webcomponents/webcomponentsjs --save
```

We have imported the polyfills in the polyfills.elements.ts file.
```bash
import '@webcomponents/webcomponentsjs/custom-elements-es5-adapter.js';
```

## Validate Native Web Component

As the Native Web Component app-demo is just an HTML element at its core, you can set its attributes either by declaring it statically in the template or by calling the native setAttribute method:

`document.querySelector('app-demo').setAttribute('content', 'Set content by querySelector()');` 

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
