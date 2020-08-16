import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './layout/login/login-layout/login-layout.component';
import { LoginComponent } from './components/Login/login/login.component';
import { ShoppingLayoutComponent } from './layout/shopping-layout/shopping-layout/shopping-layout.component';
import { RegisterComponent } from './components/register/register/register.component';
import { ShoppingComponent } from './components/shopping/shopping/shopping.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CartLayoutComponent } from './layout/cart-layout/cart-layout/cart-layout.component';
import { CartComponent } from './components/cart/cart.component';
import { ActivateAccountComponent } from './components/activate-account/activate-account.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductsComponent } from './components/products/products.component';
import { EditProductComponent } from './components/edit-product/edit-product.component';
import { PaymentCompletedComponent } from './components/payment-completed/payment-completed.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { FawryDetailsComponent } from './components/fawry-details/fawry-details.component';
import { CouponsComponent } from './components/coupons/coupons.component';
import { VolumesComponent } from './components/volumes/volumes.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { SalesSupportSapComponent } from './components/sales-support-sap/sales-support-sap.component';
import { DepositeRCusomerComponent } from './components/deposite-rcusomer/deposite-rcusomer.component';
import { ManagmentRegularTasksComponent } from './components/RegularCustomer/managment-regular-tasks/managment-regular-tasks.component';
import { OrderDetailRelatedOneCustomerComponent } from './components/RegularCustomer/order-detail-related-one-customer/order-detail-related-one-customer.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { ReqularCustomerGuard } from './guard/reqular-customer.guard';
import { OneCustomerGuard } from './guard/one-customer.guard';
import { CustomerServiceComponent } from './components/OrderManagement/customer-service/customer-service.component';
import { PaymentErrorComponent } from './components/payment-error/payment-error.component';
import { SalesSupportPreviewComponent } from './components/OrderManagement/sales-support-preview/sales-support-preview.component';
import { ManagementRegularTasksForOneCustomerComponent } from './components/RegularCustomer/management-regular-tasks-for-one-customer/management-regular-tasks-for-one-customer.component';
import { ComplainsComponent } from './components/complains/complains.component';
import { UpdateSapCustomerComponent } from './components/Account/update-sap-customer/update-sap-customer.component';
import { TransportationManagementComponent } from './components/transportation-management/transportation-management.component';
import { ProductdetailLayoutComponent } from './layout/productdetail-layout/productdetail-layout.component';

// update-sap-customer
//import { ManagmentRegularTasksComponent } from './components/RegularCustomer/managment-regular-tasks/managment-regular-tasks.component';

// import { SalesSupportComponent } from './components/sales-support/sales-support.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'shopping',
        pathMatch: 'full'
    },
    {
        path: '',
        component: LoginLayoutComponent,
        children: [
            { path: 'login', component: LoginComponent },
            { path: 'login/:url', component: LoginComponent },
            { path: 'register', component: RegisterComponent },   
            { path: 'completeReg/:ActivationCode', component: ActivateAccountComponent },
            { path: 'reset-password', component: ResetPasswordComponent },   
            { path: 'change-password', component: ChangePasswordComponent },
        ]  
    },
    {
        path: '',
        component: ShoppingLayoutComponent,
        children: [
           { path: 'product-details/:id', component: ProductDetailsComponent },

            { path: 'shopping', component: ShoppingComponent },
            { path: 'my-orders', component: MyOrdersComponent },
            { path: 'order-details/:id', component: OrderDetailsComponent },
            {path:'ordersplantpaied',component:SalesSupportPreviewComponent},
            {path : 'Orderdetail/:id',component:OrderDetailRelatedOneCustomerComponent}
        ]  
    },
    {
        path: '',
        component: CartLayoutComponent,
        children: [
           
            { path: 'cart', component: CartComponent },
            { path: 'paymentcompleted', component: PaymentCompletedComponent },
            { path: 'paymentError', component: PaymentErrorComponent },

            { path: 'fawrypay', component: FawryDetailsComponent },
            { path: 'coupons', component: CouponsComponent },
            { path: 'volumes', component: VolumesComponent },
            { path: 'statistics', component: StatisticsComponent },
            { path: 'sales-support', component:SalesSupportSapComponent },
            { path: 'DepositeRCusomer',component:DepositeRCusomerComponent},
            { path: 'ManagmentRegularTasks',component:ManagmentRegularTasksComponent},
            { path: 'CustomerService',component:CustomerServiceComponent},
            { path: 'ManagementRegularTasksForOneCustomer',component:ManagementRegularTasksForOneCustomerComponent},
            { path: 'products', component: ProductsComponent },
            { path: 'edit-product/:id', component: EditProductComponent },
            { path: 'add-product', component: EditProductComponent },
            { path: 'AddComplain', component: ComplainsComponent},
            { path: 'UpdateMasterData', component:UpdateSapCustomerComponent},
            { path: 'TransportationManagement', component:TransportationManagementComponent},


            
           // { path: 'ManagmentRegularTasks', component: ManagmentRegularTasksComponent, canActivate: [ReqularCustomerGuard] },
            // { path: 'ManagmentRegularTasks', component: ManagmentRegularTasksComponent, canActivate: [OneCustomerGuard] },
            
            
        ]  
    },
    {
        path: '',
        component: AdminLayoutComponent,
        children: [
            { path: 'products', component: ProductsComponent },
            { path: 'edit-product/:id', component: EditProductComponent },
            { path: 'add-product', component: EditProductComponent },
        ]  
    }
    // ,
    // {
    //     path:'',
    //     component:ProductdetailLayoutComponent,
    //     children:[
    //         {

    //         }
    //     ]
    // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
