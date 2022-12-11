import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { OrderListComponent } from './order/order-list/order-list.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
