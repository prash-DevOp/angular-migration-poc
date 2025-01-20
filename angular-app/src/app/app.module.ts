import '@angular/compiler';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ItemListComponent } from './item-list/item-list.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [],
  bootstrap: [ItemListComponent], // Bootstrap the Angular component
})
export class AppModule {}
