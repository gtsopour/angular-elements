import {enableProdMode} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {environment} from './environments/environment';
import {ElementsModule} from './app/elements.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(ElementsModule)
.catch(err => console.error(err));
