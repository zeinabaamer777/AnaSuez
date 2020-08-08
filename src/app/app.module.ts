import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClient, HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { SlickCarouselModule } from 'ngx-slick-carousel';

import { OwlModule } from 'ngx-owl-carousel'; 
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginLayoutComponent } from './layout/login/login-layout/login-layout.component';
import { ShoppingLayoutComponent } from './layout/shopping-layout/shopping-layout/shopping-layout.component';
import { LoginComponent } from './components/Login/login/login.component';
import { ShoppingComponent } from './components/shopping/shopping/shopping.component';
import { RegisterComponent } from './components/register/register/register.component';
import { FooterComponent } from './layout/footer/footer/footer.component';
import { HeaderComponent } from './layout/header/header/header.component';
import { SidebarComponent } from './layout/side-bar/sidebar/sidebar.component';
import { LangToggleDirective } from './directives/lang-toggle.directive';
import { SimpleHeaderComponent } from './layout/simple-header/simple-header/simple-header.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartLayoutComponent } from './layout/cart-layout/cart-layout/cart-layout.component';
import { CartComponent } from './components/cart/cart.component';
import { AuthService } from './services/auth.service';
import { Api } from './provider/Api';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { httpInterceptor } from './interceptors/httpInterceptor';
import { languageHelper } from './Helpers/languageHelper';
import { Language } from './config/language';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { NgxTinymceModule } from 'ngx-tinymce';
import {NgxPaginationModule} from 'ngx-pagination';
import { PaymentCompletedComponent } from './components/payment-completed/payment-completed.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FawryDetailsComponent } from './components/fawry-details/fawry-details.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import {AaDatepickerModule} from  'ngx-animating-datepicker';
import { VolumesComponent } from './components/volumes/volumes.component';
import { DateHandlerDirective } from './directives/date-handler.directive';
import { DatePipe, APP_BASE_HREF } from '@angular/common';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { ChartsModule } from 'ng2-charts';
import {TabsModule} from 'ngx-tabset';
// import { SalesSupportComponent } from './components/sales-support/sales-support.component';
import { SalesSupportSapComponent } from './components/sales-support-sap/sales-support-sap.component';
import { DepositeRCusomerComponent } from './components/deposite-rcusomer/deposite-rcusomer.component';
import { SalesSupportOrderPortalComponent } from './components/sales-support-order-portal/sales-support-order-portal.component';
import { UserslookupComponent } from './components/Account/userslookup/userslookup.component';
import { OrderdestinationComponent } from './components/OrderManagement/orderdestination/orderdestination.component';
import { OrderdestinationpricesComponent } from './components/OrderManagement/orderdestinationprices/orderdestinationprices.component';
import { GetProductLookupComponent } from './components/Product/get-product-lookup/get-product-lookup.component';
import { OrderTargetTrederComponent } from './components/OrderManagement/order-target-treder/order-target-treder.component';
import { CityLookupComponent } from './components/Account/city-lookup/city-lookup.component';
import { UserbycitylookupComponent } from './components/Account/userbycitylookup/userbycitylookup.component';
import { ManagmentRegularTasksComponent } from './components/RegularCustomer/managment-regular-tasks/managment-regular-tasks.component';
import { OrderDetailRelatedOneCustomerComponent } from './components/RegularCustomer/order-detail-related-one-customer/order-detail-related-one-customer.component';
//import { ManagmentRegularTasksComponent } from './components/RegularCustomer/managment-regular-taska/managment-regular-tasks.component';
//import { ManagmentRTaskaComponent } from './components/managment-rtaska/managment-rtaska.component';
// import { UserbycityslookupComponent } from './userbycityslookup/userbycityslookup.component';
//import { TestComponent } from './components/Account/test/test.component';
//import { Userslookup1Component } from './components/Account/userslookup1/userslookup1.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { CustomerServiceComponent } from './components/OrderManagement/customer-service/customer-service.component';
//import { PaymentErroComponent } from './payment-erro/payment-erro.component';
import { PaymentErrorComponent } from './components/payment-error/payment-error.component';
import { SalesSupportPreviewComponent } from './components/OrderManagement/sales-support-preview/sales-support-preview.component';
import { ManagementRegularTasksForOneCustomerComponent } from './components/RegularCustomer/management-regular-tasks-for-one-customer/management-regular-tasks-for-one-customer.component';
import { FilterorderComponent } from './components/OrderManagement/filterorder/filterorder.component';
import { DeliverOrderWayComponent } from './components/Account/deliver-order-way/deliver-order-way.component';
import { RouterModule } from '@angular/router';

import { routes } from "./app-routing.module";
//import { ChangeTextDirective } from './directives/change-text.directive';
import { OnlyNumber } from './directives/only-number.directive';
import { ComplainsComponent } from './components/complains/complains.component';
import { UpdateSapCustomerComponent } from './components/Account/update-sap-customer/update-sap-customer.component';
import { TransportationManagementComponent } from './components/transportation-management/transportation-management.component';
import { TrucksComponent } from './components/transportation-management/trucks/trucks.component';
import { DriversComponent } from './components/transportation-management/drivers/drivers.component';
import { ManagmentComponent } from './components/transportation-management/managment/managment.component'
import {DataTablesModule} from 'angular-datatables';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomerbalanceComponent } from './components/Account/customerbalance/customerbalance.component';
import { TestdtComponent } from './components/transportation-management/testdt/testdt.component';
import { ProductmarqueeComponent } from './components/products/productmarquee/productmarquee.component';
import { DriverLookupComponent } from './components/transportation-management/drivers/driver-lookup/driver-lookup.component';
import { ProductstabComponent } from './components/products/productstab/productstab.component';
import { DataServiceComponent } from './components/data-service/data-service.component';
import { LanguageComponent } from './components/language/language.component';
import { ProductdetailLayoutComponent } from './layout/productdetail-layout/productdetail-layout.component';
import { HeaderproductdetailComponent } from './layout/headerproductdetail/headerproductdetail.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { CarouselHolderComponent } from './layout/carousel-holder/carousel-holder.component';
import { CarouselSlickHolderComponent } from './layout/carousel-slick-holder/carousel-slick-holder.component';
import { HeroCarouselComponent } from './layout/hero-carousel/hero-carousel.component';
@NgModule({
  declarations: [
    AppComponent,
    DateHandlerDirective,
    LoginLayoutComponent,
    ShoppingLayoutComponent,
    LoginComponent,
    ShoppingComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    SidebarComponent,
    LangToggleDirective,
    SimpleHeaderComponent,
    ProductDetailsComponent,
    CartLayoutComponent,
    CartComponent,
    ActivateAccountComponent,
    ProductsComponent,
    AdminLayoutComponent,
    EditProductComponent,
    PaymentCompletedComponent,
    MyOrdersComponent,
    OrderDetailsComponent,
    FawryDetailsComponent,
    CouponsComponent,
    VolumesComponent,
    DateHandlerDirective,
    StatisticsComponent,
    SalesSupportSapComponent,
    DepositeRCusomerComponent,
    SalesSupportOrderPortalComponent,
    UserslookupComponent,
    OrderdestinationComponent,
    OrderdestinationpricesComponent,
    GetProductLookupComponent,
    OrderTargetTrederComponent,
    CityLookupComponent,
    UserbycitylookupComponent,
    ManagmentRegularTasksComponent,
    OrderDetailRelatedOneCustomerComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    CustomerServiceComponent,
    //PaymentErroComponent,
    PaymentErrorComponent,
    SalesSupportPreviewComponent,
    ManagementRegularTasksForOneCustomerComponent,
    FilterorderComponent,
    DeliverOrderWayComponent,
    OnlyNumber,
    ComplainsComponent,
    UpdateSapCustomerComponent,
    TransportationManagementComponent,
    TrucksComponent,
    DriversComponent,
    ManagmentComponent,
    CustomerbalanceComponent,
    TestdtComponent,
    ProductmarqueeComponent,
    DriverLookupComponent,
    ProductstabComponent,
    DataServiceComponent,
    LanguageComponent,
    ProductdetailLayoutComponent,
    HeaderproductdetailComponent,
    NavbarComponent,
    CarouselHolderComponent,
    CarouselSlickHolderComponent,
    HeroCarouselComponent,
    
   // ManagmentRegularTasksComponent,
   // ManagmentRTaskaComponent,
    // UserbycityslookupComponent,
    //TestComponent,
    //Userslookup1Component,
    
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    ChartsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes, { useHash:true }),
    NgbModalModule,
    AaDatepickerModule,
    NgxPaginationModule,
    NgxSpinnerModule,
    NgbCollapseModule,
    CarouselModule ,
    SlickCarouselModule,
    OwlModule ,
    NgbModule,
    TabsModule.forRoot(),
    TranslateModule.forRoot({
        loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
        }
    }),
    NgxTinymceModule.forRoot({
      baseURL: '//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/'     
    })
  ],
  providers: [Api,Language,DatePipe,AuthService,languageHelper, {
    provide: HTTP_INTERCEPTORS,
    useClass: httpInterceptor,
    multi: true
  },
    // {
    // provide: APP_BASE_HREF, useValue: '/Portal'}
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
export function HttpLoaderFactory(http: HttpClient) {
  //return new TranslateHttpLoader(http, './portal/assets/i18n/', '.json');
  return new TranslateHttpLoader(http, "./assets/i18n/");

 // return new TranslateHttpLoader(http);
}