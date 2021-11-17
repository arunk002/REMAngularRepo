import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { PropertyService } from '../property.service';

@Component({
  selector: 'app-property-listing',
  templateUrl: './property-listing.component.html',
  styleUrls: ['./property-listing.component.css']
})
export class PropertyListingComponent implements OnInit {

  valuer : number = 0;
  value(){
    this.valuer++;
    return this.valuer;
  }

  public propertyList : any = [];
  num = [0,1,2,3,4,5,6,7,8,9];
  constructor(private sellerService :CustomerService,private propertyService : PropertyService,private router: Router,private aroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyService.getPropertyList().subscribe(propertyData=> {
      this.propertyList = propertyData;});
  }
  redirect(id:number){
    console.log(this.router.navigate(['/property',id]));
    this.router.navigate(['/list',id]);
  }
}
