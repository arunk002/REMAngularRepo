import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { AppComponent } from './app.component';
import { BackgroundComponent } from './background/background.component';
import { BuyerComponent } from './buyer/buyer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { CustomerRedirectComponent } from './customer-redirect/customer-redirect.component';
import { HomeComponent } from './home/home.component';
import { PropertyListingComponent } from './property-listing/property-listing.component';
import { PropertyComponent } from './property/property.component';
import { SellerComponent } from './seller/seller.component';
import { AdminCreatepropertyComponent } from './admin-createproperty/admin-createproperty.component';
import { AdminCreatesellerComponent } from './admin-createseller/admin-createseller.component';
import { AdminEditpropertyComponent } from './admin-editproperty/admin-editproperty.component';
import { AdminEditsellerComponent } from './admin-editseller/admin-editseller.component';
import { CreatebuyerComponent } from './createbuyer/createbuyer.component';
import { EditbuyerComponent } from './editbuyer/editbuyer.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { SellerlistComponent } from './sellerlist/sellerlist.component';
import { EditComponent } from './edit/edit.component';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { CartComponent } from './cart/cart.component';
import { AddpropertyComponent } from './addproperty/addproperty.component';
import { AdminGuardGuard } from './admin-guard.guard';



const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'cart',component:CartComponent, canActivate : [AdminGuardGuard], data:{Role: ['buyer'],}},
  {path:'customer',component:CustomerRedirectComponent},
  {path:'customer/Buyer',component:BuyerComponent},
  {path:'customer/Seller',component:SellerComponent},
  {path:'list',component:PropertyListingComponent},
  {path:'list/:id',component:PropertyComponent},
  { path: 'contactus', component: ContactusComponent },
  { path: 'adminmenu', component: AdminmenuComponent, canActivate : [AdminGuardGuard], data:{Role: ['admin'],} },
  { path: 'editbuyer/:buyer', component: EditbuyerComponent, canActivate : [AdminGuardGuard], data:{Role: ['buyer'],} },
  { path: 'createbuyer', component: CreatebuyerComponent },
  { path: 'wishlist', component: WishlistComponent , canActivate : [AdminGuardGuard], data:{Role: ['buyer'],}},
  { path: 'createpropertyadmin/:sellerid', component: AdminCreatepropertyComponent , canActivate : [AdminGuardGuard], data:{Role: ['admin'],} },
  { path: 'updatepropertyadmin/:propertyid', component: AdminEditpropertyComponent , canActivate : [AdminGuardGuard], data:{Role: ['admin'],} },
  { path: 'admincreateseller' , component: AdminCreatesellerComponent , canActivate : [AdminGuardGuard], data:{Role: ['admin'],}},
  { path: 'admineditseller/:sellerid' , component: AdminEditsellerComponent , canActivate : [AdminGuardGuard], data:{Role: ['admin'],} },
  {path:'sellerlist',component:SellerlistComponent, canActivate : [AdminGuardGuard], data:{Role: ['seller'],}},
  {path:'edit/:id',component:EditComponent, canActivate : [AdminGuardGuard], data:{Role: ['seller'],}},
  { path: 'signup', component: SignupComponent,  pathMatch: 'full' },
  { path: 'login',  component: LoginComponent,   pathMatch: 'full' },
  { path: 'addproperty', component: AddpropertyComponent, canActivate : [AdminGuardGuard], data:{Role: ['seller'],} },
  { path: '', redirectTo: '/login',   pathMatch: 'full' }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
