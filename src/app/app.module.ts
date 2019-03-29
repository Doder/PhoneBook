import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PhoneItemsComponent } from './phone-items/phone-items.component';
import { AppRoutingModule } from './app-routing.module';
import { DetailedViewComponent } from './detailed-view/detailed-view.component';

@NgModule({
  declarations: [
    AppComponent,
    PhoneItemsComponent,
    DetailedViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
