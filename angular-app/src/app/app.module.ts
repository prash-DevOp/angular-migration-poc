import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeComponent } from '@angular/upgrade/static';
import { ItemListComponent } from './item-list/item-list.component';

declare var angular: any;

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  declarations: [],
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // Bootstrap AngularJS application
    this.upgrade.bootstrap(document.body, ['pocApp'], { strictDi: true });
  }
}

// Downgrade Angular component for AngularJS
angular.module('pocApp').directive('appItemList', downgradeComponent({
  component: ItemListComponent,
}));
