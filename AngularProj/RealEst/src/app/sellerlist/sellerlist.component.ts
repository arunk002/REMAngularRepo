import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';
@Component({
  selector: 'app-sellerlist',
  templateUrl: './sellerlist.component.html',
  styleUrls: ['./sellerlist.component.css']
})
export class SellerlistComponent implements OnInit {
  authUser: any;
  sid !: number  ;
  public propertyData : any = [];
  public sellerData : any = [];

  
  constructor(public router: Router, private propertyService : PropertyService, private sellerService : CustomerService) { }

  ngOnInit(): void {
    this.authUser  = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
    this.sid = this.authUser.id
    this.propertyService.getPropertyBySellerId(this.sid).subscribe(data=> this.propertyData = data);
    
}

  // redirect(){
  //   console.log(this.router.navigate(['/sellerlist']));
  //   this.router.navigate(['/edit/',]);
  // }

  redirect(property_Id: number){
    this.router.navigate(['/edit/',property_Id])
  }

  toAddprop(){
    this.router.navigate(['/addproperty'])

  }

}
