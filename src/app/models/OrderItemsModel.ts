import { ProductModel } from './ProductModel';

export class OrderItemsModel
{
    Product:ProductModel;
    ItemPrice:number;
    NameEn:string;
    QTY:number; 
    FK_OrderId:number;
}