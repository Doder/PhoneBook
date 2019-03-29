import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';
import { PhoneItemsComponent } from './phone-items/phone-items.component';

const routes: Routes = [
  { path: '', component: PhoneItemsComponent },
  { path: 'detailed', component: DetailedViewComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
