import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UploadedDealsComponent } from './uploaded-deals/uploaded-deals.component';
import { UploadedDealComponent } from './uploaded-deals/components/uploaded-deal/uploaded-deal.component';

@NgModule({
  declarations: [
    AppComponent,
    UploadedDealsComponent,
    UploadedDealComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
