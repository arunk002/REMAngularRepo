import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  public authUser : any;
  public isNotLogged : boolean = false;

  ngOnInit(): void {
    this.authUser = sessionStorage.getItem("authUser");
    this.authUser = JSON.parse(this.authUser);
    this.isNotLogged = this.authUser.role != null;
  }


}



