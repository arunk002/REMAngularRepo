import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { IUser } from '../IUser';
import { UserloginService } from '../userlogin.service';
enum CheckBoxType { BUYER, SELLER, NONE };

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  msg!: string;

  check_box_type = CheckBoxType;

  currentlyChecked!: CheckBoxType;

  selectCheckBox(targetType: CheckBoxType) {
    // If the checkbox was already checked, clear the currentlyChecked variable
    if(this.currentlyChecked === targetType) {
      this.currentlyChecked = CheckBoxType.NONE;
      return;
    }

    this.currentlyChecked = targetType;
  }

  constructor(private userLogin: UserloginService, private buyerService: CustomerService, private route: Router) { }

  public user = {
    email: '',
    password: '',
    user: '',
  };
  authUser: IUser = {
    id: 0,
    email: '',
    password: '',
    user: ''
  };

  ngOnInit(): void {
  }
  public set!: string;
  typeOfUser(val: string) {
    if (val == "seller") {
      this.set = "seller"
    }
    else {
      this.set = "buyer"
    }
  }
  createAccount() {
    console.log(this.user);
    console.log(this.authUser);
    if (this.set == "buyer") {
      this.userLogin
        .loginBuyer(this.user)
        .subscribe(data => {
          this.authUser = data;
          sessionStorage.setItem('authUser', JSON.stringify(data));
          console.log(this.authUser)
          this.route.navigate(['/home'])
        },
          error => {
            this.msg = "Bad credentials, Enter Valid mail and password"
            console.log("Exception occured");

          });

    }
    else if (this.set == "seller") {
      this.userLogin
        .loginSeller(this.user)
        .subscribe((data) => {
          this.authUser = data;
          sessionStorage.setItem('authUser', JSON.stringify(data));
          console.log(this.authUser)
          this.route.navigate(['/sellerlist/',this.authUser.id])
        }, error => {
          this.msg = "Bad credentials, Enter Valid mail and password"
          console.log("Exception occured");

        });
    }
  }
}