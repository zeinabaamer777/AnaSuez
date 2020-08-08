import { BaseModel } from './BaseModel';
import { ProductTypeModel } from './ProductTypeModel';
import { PLantModel } from './PlantModel';

export class ProductModel extends BaseModel {
    ProductName: string;
    ProductLabel:string;
    ProductLabelAR:string;
    ProductNameAR: string;
    ProductFooter:string;
    ProductFooterAR:string;
    ShortDescription: string;
    ShortDescriptionAR: string;
    LongDescription: string;
    LongDescriptionAR: string;
    Image: string;
    Price: number;
    FK_ProductType: number;
    FK_PlantId: number;
    ProductType: ProductTypeModel;
    Plant: PLantModel;
    IsActive:boolean;
}
export class ProductVmModel extends BaseModel {
    Id:number;
    ProductName: string;
    ProductLabel:string;
    ProductLabelAR:string;
    ProductNameAR: string;
    ProductFooter:string;
    ProductFooterAR:string;
    ShortDescription: string;
    ShortDescriptionAR: string;
    LongDescription: string;
    LongDescriptionAR: string;
    Image: string;
    Price: number;
    FK_ProductType: number;
    FK_PlantId: number;
    ProductType: ProductTypeModel;
    Plant: PLantModel;
    IsActive:boolean;
    DestinationPrice:number;
}