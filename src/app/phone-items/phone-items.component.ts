import { Component, OnInit } from '@angular/core';
import { ITEMS } from '../mock-items';

@Component({
  selector: 'app-phone-items',
  templateUrl: './phone-items.component.html',
  styleUrls: ['./phone-items.component.css']
})
export class PhoneItemsComponent implements OnInit {
  items = ITEMS;
  constructor() { }

  ngOnInit() {
  }

}
