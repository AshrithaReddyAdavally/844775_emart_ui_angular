import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListItemComponent } from './eMart/item/list-item/list-item.component';
import { ListDisplayComponent } from './eMart/item/list-display/list-display.component';
import { CartListComponent } from './eMart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './eMart/bill/bill-view/bill-view.component';
import { BillListComponent } from './eMart/bill/bill-list/bill-list.component';
import { LoginComponent } from './eMart/user/login/login.component';


const routes: Routes = [{
                          path : 'item-display/:iId',
                          component : ListDisplayComponent
                        },
                        {
                          path : 'item-list',
                          component : ListItemComponent
                        },
                        {
                          path : 'cart-list',
                          component : CartListComponent
                        },
                        {
                          path : 'bill-view',
                          component : BillViewComponent
                        },
                        {
                          path : 'bill-list',
                          component : BillListComponent
                        },
                        {
                          path : 'login',
                          component : LoginComponent
                        }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
