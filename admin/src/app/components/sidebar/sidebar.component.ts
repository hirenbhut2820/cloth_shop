import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  activeRoute:string = "";
  routeLinks:any = {
    "/brands": "brands",
    "/categories": "categories",
    "/coupons": "coupons",
    "/onboarded-users": "onbaorded-users",
    "/orders": "orders",
    "/products": "products"
  };
  constructor(public router: Router, public location: Location){
    this.activeRoute = this.routeLinks[this.location.path()]
  }
}
