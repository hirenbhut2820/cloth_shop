import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(public http: HttpClient) { }
  apiUrl = "http://localhost:3000/api"
  getBrandsList(){
    return this.http.get(this.apiUrl+"/brands")
  }

  addBrand(body:any){
    return this.http.post(this.apiUrl+"/brands", body)
  }

  updateBrand(id:string, body:any){
    return this.http.put(this.apiUrl+"/brands/"+id, body)
  }

  deleteBrand(id: string){
    return this.http.delete(this.apiUrl+"/brands/"+id)
  }
}
 