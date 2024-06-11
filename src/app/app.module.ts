import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuppliersComponent } from './suppliers/suppliers.component';
import { HowWeBuyComponent } from './how-we-buy/how-we-buy.component';
import { PublicPurchasesComponent } from './public-purchases/public-purchases.component';

@NgModule({
  declarations: [
    AppComponent,
    SuppliersComponent,
    HowWeBuyComponent,
    PublicPurchasesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
