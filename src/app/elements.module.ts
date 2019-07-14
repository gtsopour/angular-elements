import {Injector, NgModule} from '@angular/core';
import {DemoComponent} from './demo/demo.component';
import {createCustomElement} from '@angular/elements';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
  declarations: [
    DemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  exports: [
    DemoComponent
  ],
  entryComponents: [
    DemoComponent
  ]
})
export class ElementsModule {
  constructor(private injector: Injector) {}
  ngDoBootstrap() {
    const demoElement = createCustomElement(DemoComponent, {
      injector: this.injector
    });
    customElements.define('app-demo', demoElement);
  }
}
