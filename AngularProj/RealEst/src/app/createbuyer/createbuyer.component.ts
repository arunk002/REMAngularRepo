import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IBuyer } from '../IBuyer';

@Component({
  selector: 'app-createbuyer',
  templateUrl: './createbuyer.component.html',
  styleUrls: ['./createbuyer.component.css']
})
export class CreatebuyerComponent implements OnInit {
  @Input()
  buyerData : any = {
    "customerId" : 0,
    "fName" : '' ,
    "lName" : '',
    "phoneNumber" : '',
    "email" : '' ,
    "pan" : '',
    "adhar" : '',
    "password" : '' 

}
  constructor(private buyerService : CustomerService, private route : Router) { }

  ngOnInit(): void {
  }
  createBuyer(){
    this.buyerService.createBuyer(this.buyerData).subscribe(data=> this.route.navigate(['/adminmenu'])  )
  }

  ngAfterViewInit(){
    
  }
  
}
