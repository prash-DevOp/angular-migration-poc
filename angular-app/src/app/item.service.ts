import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ItemService {
  getItems() {
    return ['Item 1', 'Item 2', 'Item 3'];
  }
}
