import { OrderModel } from './OrderModel';
import { DestinationModel } from './DestinationModel';
import { UserModel } from './UserModel';

export class OrderUsersModel {

    OrderId: number;
    DestinationId: number;

    Approve: boolean;

    Order: OrderModel;

    Destination:DestinationModel;
    Users:UserModel;
    CustomerServiceApprove:boolean;

}


// public long? OrderId{ get; set; }
//         [ForeignKey("Destination")]
//         public long? DestinationId { get; set; }
//         [ForeignKey("Users")]
//         public long? UserId { get; set; }
//         public Boolean? Approve { get; set; }
//         public Order Order{ get; set; }
//         public Destination Destination{ get; set; }
//         public User  Users { get; set; }
//         public Boolean? CustomerServiceApprove { get; set; }