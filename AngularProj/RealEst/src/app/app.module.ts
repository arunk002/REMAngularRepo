import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { BuyerComponent } from './buyer/buyer.component';
import { SellerComponent } from './seller/seller.component';
import { CustomerRedirectComponent } from './customer-redirect/customer-redirect.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyComponent } from './property/property.component';
import { HomeComponent } from './home/home.component';
import { EditbuyerComponent } from './editbuyer/editbuyer.component';
import { CreatebuyerComponent } from './createbuyer/createbuyer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WishlistComponent } from './wishlist/wishlist.component';
import { AdminCreatepropertyComponent } from './admin-createproperty/admin-createproperty.component';
import { AdminEditpropertyComponent } from './admin-editproperty/admin-editproperty.component';
import { AdminEditsellerComponent } from './admin-editseller/admin-editseller.component';
import { AdminCreatesellerComponent } from './admin-createseller/admin-createseller.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { HttpClientModule } from '@angular/common/http';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { EditComponent } from './edit/edit.component';


import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CartComponent } from './cart/cart.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    BackgroundComponent,
    BuyerComponent,
    SellerComponent,
    CustomerRedirectComponent,
    PropertyListingComponent,
    PropertyComponent,
    HomeComponent,
    ContactusComponent,
    AdminmenuComponent,
    EditbuyerComponent,
    CreatebuyerComponent,
    WishlistComponent,
    AdminCreatepropertyComponent,
    AdminEditpropertyComponent,
    AdminEditsellerComponent,
    AdminCreatesellerComponent,
    SellerlistComponent,
    EditComponent,
    LoginComponent,
    SignupComponent,
    CartComponent,
    AddpropertyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatSliderModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA5hxPaX_6yYlTy_7tsQFVeqsGiCmoZwYU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
