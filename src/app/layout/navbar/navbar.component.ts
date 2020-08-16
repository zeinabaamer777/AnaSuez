import { Component, OnInit } from '@angular/core';
import { PLantModel } from 'src/app/models/PlantModel';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';
import { NotificationServiceService } from 'src/app/services/notification-service.service';
import { ProductService } from 'src/app/services/product.service';
import { Language } from 'src/app/config/language';
import { PlantService } from 'src/app/services/plant.service';
import { CookieService } from 'src/app/services/cookie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  searchKeyWord: string = "";
  selectedPlant: number = 0;
  plants: PLantModel[];
  cart_item_cont: number = 0;
  subscription: Subscription;
  public toggleNavbar = false;
  

  lUserRoleName = localStorage.getItem("UserRoleName")
  UserName = localStorage.getItem("UserName")

  constructor(private _cartService:CartService,
    private _notificatoinService: NotificationServiceService, 
    private router: Router, private _productService: ProductService,
     private _plantService: PlantService, private lang: Language,
     private cookies: CookieService) {
    this.subscription = this._notificatoinService.getCartCount().subscribe(cnt => {
      this.cart_item_cont = cnt.cnt;
    });
    this._cartService.GetCartCount().subscribe((res)=>{
      this._notificatoinService.UpdateNotificatoinCount(res.CartItemCount);
    })
  }

  logout() {
    debugger
    this.cookies.setCookie("SCEPAuthorization", "", 1);

    localStorage.removeItem("Authorization");
    //this.headers.delete('Authorization');
    //localStorage.removeItem("SCEPAuthorization");
    //localStorage.removeItem("SCEPAuthorization");


    localStorage.clear();

    this.router.navigateByUrl('/login');
  }
  search() {

    this._productService.filterProducts(this.searchKeyWord, this.selectedPlant);
  }
  select(val) {

    this.selectedPlant = val;
  }
  ngOnInit() {
  }
}
