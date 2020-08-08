import { UserModel } from './UserModel';
import { DestinationModel } from './DestinationModel';
import { OrderStatusModel } from './OrderStatusModel';
import { PaymentMethodModel } from './PaymentMethodModel';

export class OrderModel {

    Id: number;
    BasePrice: number;
    ShippingFees: number;
    VAT: number;
    Total: number;
    PaymentRefNum:string;    
    OrderIdentifier:string;
    Address:string;
    DueDate:Date;
    created_at:Date;
    IsPaied:boolean;
    User:UserModel;
    FK_StatusId:number;
    FK_UserId:number;
    FK_PaymentMethod:number;
    FK_DestId:number;
    Destination:DestinationModel;
    OrderStatus:OrderStatusModel;
    PaymentMethods:PaymentMethodModel;
    Type:number;
}