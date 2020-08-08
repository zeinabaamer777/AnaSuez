import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DestinationPriceService } from 'src/app/services/destination-price.service';
import { TranslateService } from '@ngx-translate/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'orderdestinationprices',
  templateUrl: './orderdestinationprices.component.html',
  styleUrls: ['./orderdestinationprices.component.css']
})
export class OrderdestinationpricesComponent implements OnInit {
 destinationPriceForm:FormGroup;
 destinationId:string;
 productId:string;
 price:number;
  constructor(private formBuilder:FormBuilder,
    private destinationPriceService:DestinationPriceService,
    private  translate: TranslateService) { }

  ngOnInit() {
    this.destinationPriceForm=this.formBuilder.group({
      Id:[''],
      PricePerTon:[''],
      FK_DestId:this.destinationId,
      FK_ProductId:[''],
      Destination:[null],
      Product:[null],
      created_at: null,
      updated_at: null

      // "FK_DestId": 1,
      // "FK_ProductId": 15,
      // "PricePerTon": 32323,
      // "Destination": null,
      // "Product": null,
      // "Id": 0,
      // "created_at": "2020-04-28T10:27:29.559Z",
      // "updated_at": "2020-04-28T10:27:29.559Z"


    })
  }

  // public long FK_DestId { get; set; }
  // [ForeignKey("Product")]
  // public long FK_ProductId { get; set; }
  // public double PricePerTon { get; set; }

  // public Destination Destination { get; set; }
  // public Product Product { get; set; }





  GetDestinationValue(event)
  {
    debugger;
    this.destinationId=event.value;
    this. GetDestinationPrice()
  }
  GetProductValue(event)
  {
    debugger;
    this.productId=event.value;
   //this. GetDestinationPrice()
  }
  GetDestinationPrice()
  {
    debugger
    this.destinationId=this.destinationId==null?"0":this.destinationId;
    this.productId=this.productId==null?"0":this.productId;;
    this.destinationPriceService.GetDestinationPrice(this.destinationId,this.productId).subscribe((res) => {
      debugger
      this.price=res.PricePerTon;
    });
  }

  Add(destinationPriceForm) {
    debugger;
    if (this.destinationPriceForm.valid) {
      this.destinationPriceForm.value.FK_DestId=this.destinationId;
      this.destinationPriceForm.value.FK_ProductId=this.productId;

      this.destinationPriceService.Add(this.destinationPriceForm.value).subscribe((res) => {
        Swal.fire({
          title: '',
          text: res.Message,
          icon: 'success',
          showCancelButton: false,
          confirmButtonText: this.translate.instant('general.ok')      
        });
      });
    }
    
  }
}
