import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { UpgradeModule } from '@angular/upgrade/static';
import { AppComponent } from './app.component'; // Use it directly.

@NgModule({
  imports: [BrowserModule, UpgradeModule, AppComponent], // Import it directly
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(upgrade: UpgradeModule) {}
}
