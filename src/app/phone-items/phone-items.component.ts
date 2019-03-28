import { Component, OnInit } from '@angular/core';
import { PhoneItem } from '../phone-item';
import { PhoneService } from '../phone.service';

@Component({
  selector: 'app-phone-items',
  templateUrl: './phone-items.component.html',
  styleUrls: ['./phone-items.component.css']
})
export class PhoneItemsComponent implements OnInit {
  items: PhoneItem[];
  constructor(private phoneService: PhoneService) { }
  getPhoneItems(): void{
    this.phoneService.getPhoneItems().subscribe(items => this.items = items);
  }
  ngOnInit() {
    this.getPhoneItems();
  }

}
