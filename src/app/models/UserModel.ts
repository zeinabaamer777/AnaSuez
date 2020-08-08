import { RoleModel } from './RoleModel';
import { CityModel } from './CityModel';

export class UserModel {

    Id: number;
    Username: string;
    FirstName: string;
    LastName: string;
    Birthdate: Date;
    Email: string;
    Gender: number;
    Phone: string;
    Role: RoleModel;
    FK_RoleId:number;
    FK_CityId:number;
    City:CityModel;
    CRN: string;
    PostalCode: string;
    StreetName: string;
    StreetNumber: string;
    Region: string;

}