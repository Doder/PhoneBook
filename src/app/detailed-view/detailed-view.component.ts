import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { PhoneItem } from '../phone-item';
import { Location } from '@angular/common';

@Component({
  selector: 'app-detailed-view',
  templateUrl: './detailed-view.component.html',
  styleUrls: ['./detailed-view.component.css']
})
export class DetailedViewComponent implements OnInit {
  item: PhoneItem = {
    id: '',
    name: '',
    email: '',
    number: '',
    tags: ['cz', 'gun']
  }
  constructor(
    private phoneService: PhoneService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  goBack(): void {
    this.location.back();
  }

  setTags(allTags: string): void {
    this.item.tags = allTags.split(',');
  }

  addNewItem(): void {
    console.log(this.item);
    this.phoneService.addPhoneItem(this.item).subscribe(() => this.goBack());
  }
}
