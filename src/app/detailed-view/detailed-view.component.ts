import { Component, OnInit } from '@angular/core';
import { PhoneService } from '../phone.service';
import { PhoneItem } from '../phone-item';
import { ActivatedRoute } from '@angular/router';
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
    tags: []
  }
  button: string = 'Add';
  constructor(
    private route: ActivatedRoute,
    private phoneService: PhoneService,
    private location: Location
  ) { }

  ngOnInit() {
    this.getItem();
  }

  getItem(): void{
    const id = this.route.snapshot.paramMap.get('id');
    if(id){
      this.button = 'Save';
      this.phoneService.getPhoneItem(id).subscribe(item => {
        this.item = item[0];
      });
    }
    
  }

  goBack(): void {
    this.location.back();
  }

  setTags(allTags: string): void {
    this.item.tags = allTags.split(',');
  }

  addNewItem(): void {
    if(this.item.name && this.item.number){
      this.phoneService.addPhoneItem(this.item).subscribe(() => this.goBack());
    }
  }

  editItem(): void{
    this.phoneService.editPhoneItem(this.item).subscribe(() => this.goBack());
  }
}
