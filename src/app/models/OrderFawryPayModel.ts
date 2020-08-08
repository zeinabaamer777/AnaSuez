 export class OrderFawryPayModel {
    language   :String;
    merchantCode    :String; 
    merchantRefNumber:String;
    customer :Customer;
    order    :OrderObject;
    signature:String;

 }
 export class Customer {
    name   :String;          
    mobile  :String;         
    email:String;            
    customerProfileId:String;

     
 } 
 export class OrderObject {
    description   :String;          
    expiry  :String;         
    orderItems :orderItems;            
    customerProfileId:String;
 } 
 export class  orderItems
    {
        productSKU :String;  
        description:String;  
        price      :String;  
        quantity   :String;  
        width      :String;  
        height     :String;  
        length     :String;  
        weight     :String;  

    }