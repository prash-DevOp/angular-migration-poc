import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { downgradeInjectable } from '@angular/upgrade/static';
import { ItemService } from './item.service';
import { downgradeComponent } from '@angular/upgrade/static';
import { ItemListComponent } from './item-list/item-list.component';

declare var angular: any;

@NgModule({
  imports: [BrowserModule, UpgradeModule],
  providers: [ItemService], // Provide the Angular service
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {}

  ngDoBootstrap() {
    // Manually bootstrap AngularJS with UpgradeModule
    this.upgrade.bootstrap(document.body, ['pocApp'], { strictDi: true });
  }
}

// Downgrade the Angular service for use in AngularJS
angular.module('pocApp').factory('ItemService', downgradeInjectable(ItemService));

angular.module('pocApp').directive('appItemList', downgradeComponent({
    component: ItemListComponent
  }));
