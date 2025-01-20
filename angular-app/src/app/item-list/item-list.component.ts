import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css'],
  imports: [CommonModule],
})
export class ItemListComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];
}
