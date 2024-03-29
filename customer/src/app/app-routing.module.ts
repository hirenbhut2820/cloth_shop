import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ShopComponent } from './components/shop/shop.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { BlogComponent } from './components/blog/blog.component';
import { AboutComponent } from './components/about/about.component';
import { ShopDetailsComponent } from './components/shop-details/shop-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { BlogDetailsComponent } from './components/blog-details/blog-details.component';

const routes: Routes = [
  {
    path: "", component: HomeComponent
  },
  {
    path: "shop", component: ShopComponent
  },
  {
    path: "blog", component: BlogComponent
  },
  {
    path: "contactus", component: ContactusComponent
  },
  {
    path: "pages", children: [
      { path: "aboutus", component: AboutComponent },
      { path: "shop-details", component: ShopDetailsComponent },
      { path: "shopping-cart", component: ShoppingCartComponent },
      { path: "checkout", component: CheckoutComponent },
      { path: "blog-details", component: BlogDetailsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
