import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { OrderListComponent } from './order/order-list/order-list.component';
import { AddProductComponent } from './order/add-product/add-product.component';
import { AddItemsComponent } from './order/add-items/add-items.component';
import { HomeComponent } from './home/home.component';
import { EditProductComponent } from './product/edit-product/edit-product.component';
import { EditProductPopupComponent } from './product/edit-product-popup/edit-product-popup.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent,
    data: { isShow: false },
  },
  {
    path: 'home',
    pathMatch: 'full',
    component: HomeComponent,
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
    data: { isShow: true },
    component: OrderListComponent,
  },
  {
    path: 'add_product',
    pathMatch: 'full',
    data: { isShow: true },
    component: AddProductComponent,
  },
  {
    path: 'add_items',
    pathMatch: 'full',
    data: { isShow: true },
    component: AddItemsComponent,
  },
  {
    path: 'edit_product',
    pathMatch: 'full',
    data: { isShow: false },
    component: EditProductComponent,
  },
  {
    path: 'edit_product',
    pathMatch: 'full',
    data: { isShow: false },
    component: EditProductPopupComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
