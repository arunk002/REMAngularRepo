import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  propertyData : any = {
    property_Id : 0,
    property_Type : '',
    price : 0,
    status : false,
    contact : '',
    description : '',
    seller : {}
  }
  

  authUser: any;
  sellerId !: number  ;

  sellerData : any = {
    customerId : 0,
    sellerId : 0,
    fName : '',
    lName :'',
    phoneNumber : 0,
    email : '',
    pan : '',
    adhar : '',
    password : '',

}
  constructor(private propertyService : PropertyService,private aroute: ActivatedRoute,private sellerService : CustomerService, private route:Router) { }

  ngOnInit(): void {
    this.authUser  = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
    this.sellerId = this.authUser.id
    this.sellerService.getSellerById(this.sellerId).subscribe(data=>{
      this.sellerData = data;
      this.propertyData.seller = data;
    });
    
    
  }

  createProperty(){
    this.propertyService.createProperty(this.propertyData).subscribe(data=> this.route.navigate(['/sellerlist']) )
  }

    
getCurrentLocation() {
  if (navigator.geolocation) {
    
    navigator.geolocation.getCurrentPosition(position=>{
      const coords = position.coords;
      this.propertyData.latitude = coords.latitude
      this.propertyData.longitude = coords.longitude
    }, this.error, {
      enableHighAccuracy: false,
      timeout: 5000,
      maximumAge: 0
    });

  }
}
error(err : any) {
}

addMarker(latitude: number, longitude: number) {
  console.log(`latitude: ${latitude}, longitude: ${longitude}`);
  this.propertyData.latitude = latitude;
  this.propertyData.longitude = longitude;
}
}
