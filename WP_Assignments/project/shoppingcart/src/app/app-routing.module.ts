import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { UserpageComponent } from './userpage/userpage.component';
import { CartComponent } from './cart/cart.component';
import { ProductComponent } from './product/product.component';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  {path: '', redirectTo: '/homepage',pathMatch:'full'},
  {path:'homepage', component: HomepageComponent},
  {path: 'userpage', component: UserpageComponent},
  {path: 'cart', component:CartComponent},
  {path: 'product/:id', component: ProductComponent},
  {path: 'checkout', component:CheckoutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
