import { Api } from '../provider/Api';
import { Observable ,Subject} from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private Products = new Subject<any>();
  constructor(public api: Api) { }

  filterProducts(search,plant) {
    return this.api.get("Product/GetProducts?Search="+search+"&Plant="+plant).subscribe((res)=>{
      this.Products.next(res.Products);
    });  
  }

  clearProducts() {
    this.Products.next();
  }

  getProducts(): Observable<any> {
    return this.Products.asObservable();
  }

  public loadProducts(PageNumber, plant): Observable<any> {
    return this.api.get("Product/GetProducts?PageNumber=" + PageNumber + "&Plant=" + plant);
  }
  public loadProductsDestination(PageNumber, destinationID): Observable<any> {
    return this.api.get("Product/GetProductVM?PageNumber=" + PageNumber + "&destinationID=" + destinationID);
  }
  public adminLoadProducts(PageNumber): Observable<any> {
    return this.api.get("Product/AdminGetProducts?PageNumber=" + PageNumber);
  }
  public GetDistinationPrice(destinationID): Observable<any> 
  {
    return this.api.get("Product/GetDistinationPrice?destinationId=" + destinationID);
  }
  public productDetails(productId): Observable<any> {
    return this.api.get("Product/ProductDetails?productId=" + productId);
  }

  public saveProduct(product,file): Observable<any> {
    return this.api.post("Product/SaveProduct",{ Product:product,file:file});
  }

  public ChangeActivity(Id,status): Observable<any> {
    return this.api.post("Product/ChangeActivity?Id="+Id+"&act="+status,null);
  }
  public GetProductLookup(): Observable<any> {
    return this.api.get("Product/GetProductLookup");
  }
  public GetProductImages(productId): Observable<any> {
    return this.api.get("Product/GetProductImages?productId="+productId);
  }
  
}
