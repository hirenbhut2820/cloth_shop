import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandsComponent } from './components/brands/brands.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { OrdersComponent } from './components/orders/orders.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { OnboardedUsersComponent } from './components/onboarded-users/onboarded-users.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "products", component: ProductsComponent },
  { path: "brands", component: BrandsComponent },
  { path: "categories", component: CategoriesComponent },
  { path: "orders", component: OrdersComponent },
  { path: "coupons", component: CouponsComponent },
  { path: "onboarded-users", component: OnboardedUsersComponent },
  { path: "brands", component: BrandsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
