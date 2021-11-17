import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-admin-createseller',
  templateUrl: './admin-createseller.component.html',
  styleUrls: ['./admin-createseller.component.css']
})
export class AdminCreatesellerComponent implements OnInit {
  @Input()
  sellerData: any = {
    customerId: 0,
    sellerId: 0,
    fName: '',
    lName: '',
    phoneNumber: 0,
    email: '',
    pan: '',
    adhar: '',
    password: '',
  };
  constructor(private sellerService : CustomerService, private route : Router) { }

  ngOnInit(): void {
  }

  createSeller(){
    this.sellerService.createSeller(this.sellerData).subscribe(data=> this.route.navigate(['/adminmenu'])  )
  }

}
