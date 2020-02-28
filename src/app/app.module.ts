import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListItemComponent } from './eMart/item/list-item/list-item.component';
import { ListDisplayComponent } from './eMart/item/list-display/list-display.component';
import { CartListComponent } from './eMart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './eMart/bill/bill-view/bill-view.component';
import { BillListComponent } from './eMart/bill/bill-list/bill-list.component';
import { LoginComponent } from './eMart/user/login/login.component';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListDisplayComponent,
    CartListComponent,
    BillViewComponent,
    BillListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
