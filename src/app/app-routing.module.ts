import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { AddProductComponent } from './order/add-product/add-product.component';
import { AddItemsComponent } from './order/add-items/add-items.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    data: { isShow: true },
  },
  /* { path: 'product-details/:id', component: ProductDetails,
    children: [
      { path: '', redirectTo: 'overview', pathMatch: 'full' },
      { path: 'overview', component: Overview },
      { path: 'specs', component: Specs }
    ]
  } */
  {
    path: 'view_order',
    pathMatch: 'full',
    data: { isShow: false },
    component: OrderListComponent,
  },
  {
    path: 'add_product',
    pathMatch: 'full',
    data: { isShow: false },
    component: AddProductComponent,
  },
  {
    path: 'add_items',
    pathMatch: 'full',
    data: { isShow: false },
    component: AddItemsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
