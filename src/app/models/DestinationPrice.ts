import { ProductModel } from './ProductModel';
import { DestinationModel } from './DestinationModel';

export class DestinationPriceModel {

    Id: number;
    FK_DestId:number;
    FK_ProductId:number;
    PricePerTon:number;
    Product :ProductModel;
    Destination: DestinationModel;
    created_at: null;
     updated_at: null;

}