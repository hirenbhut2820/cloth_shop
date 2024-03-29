import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  activeHeader: string='';

  constructor(public router: Router){}

  ngOnInit(){ 
    this.activeHeader = this.router.url.split("/")[1] == "" ? "home" : this.router.url.split("/")[1];
    this.activeHeader = this.activeHeader != "home" && this.activeHeader.includes("page") ? "page" : this.activeHeader;
  }
}
