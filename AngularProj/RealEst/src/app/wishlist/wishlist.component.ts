import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IBuyer } from '../IBuyer';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnInit {
  public buyerData: any;
  public propertyData : any = [];
  constructor(private route : Router ,private buyerService : CustomerService, private propertyService : PropertyService, private aroute : ActivatedRoute) { }

  ngOnInit(): void {
    this.authUser  = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
    this.sid = this.authUser.id
    
    this.buyerService.getBuyerById(this.sid).subscribe(data => this.buyerData = data)
    this.propertyService.getWishistByBuyerId(this.sid).subscribe(data=> this.propertyData = data)
  }
  authUser: any;
  sid !: number  ;

  wishDelete(property_Id : number){
    this.propertyService.deleteWishList(property_Id, this.sid).subscribe(data=>{this.propertyData = data})
  }

  toProfile(buyerId : number){
    this.route.navigate(['/profile/'+buyerId]);
  }
  toProfileEdit(buyerId : number){
    this.route.navigate(['editbuyer/'+buyerId]);
  }
}
