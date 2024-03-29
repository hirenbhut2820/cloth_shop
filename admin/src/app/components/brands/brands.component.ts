import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api/api.service';
import * as moment from 'moment';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent {
  brandsList: any = [];
  moment:any = moment;
  editBrandNameDetails:any = {
    id: "",
    brandName: ""
  }
  addBrandDetails:any = {
    name: "",
    brandLogo: "test"
  }

  constructor(public api: ApiService){

  }

  ngOnInit(){
    this.getBrandList();
  }

  getBrandList(){
    this.api.getBrandsList()
    .subscribe((res:any)=>{
      this.brandsList = res.data ?? [];
    }, err => {
      console.log("err")
    })
  }

  addBrandList(){
    this.api.addBrand(this.addBrandDetails)
    .subscribe((res: any)=>{
      console.log(res)
      this.getBrandList();
      this.addBrandDetails = {
        name: "",
        brandLogo: ""
      }
    }, err => {
      console.log("err")
    })
  }

  editBrandName(brand:any){
    this.editBrandNameDetails = brand;
  }

  updateBrandList(){
    this.api.updateBrand(this.editBrandNameDetails._id, this.editBrandNameDetails)
    .subscribe((res:any) => {
      this.getBrandList();
      this.editBrandNameDetails = {
        name: "",
        brandLogo: ""
      }
    }, err => {
      console.log("err",err)
    })
  }

  deleteBrandList(id: string){
    this.api.deleteBrand(id)
    .subscribe((res:any)=>{
      this.getBrandList();
    }, err => {
      console.log("err",err)
    })
  }
}
