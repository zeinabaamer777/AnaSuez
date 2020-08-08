import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { TrucksModelModule } from 'src/app/models/trucks-model/trucks-model.module';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { TransportationManagementComponent } from '../transportation-management.component';
import { ManagmenttransportationService } from 'src/app/services/managmenttransportation.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { debug } from 'util';

//import pdfMake from "pdfmake/build/pdfmake";
// import pdfFonts from "pdfmake/build/vfs_fonts";
// pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'trucks',
  templateUrl: './trucks.component.html',
  styleUrls: ['./trucks.component.css']
})
export class TrucksComponent implements OnInit {
  p: number = 1;
  data: TrucksModelModule[];
  closeResult = '';
  TrucksForm: FormGroup;
  trucksModel: TrucksModelModule[];
  total: number = 0;

  constructor(private _reportService: ReportsService,
     private spinner: NgxSpinnerService,
     private modalService: NgbModal,
     private _managmentTransportationService:ReportsService,
     private translate: TranslateService,
     public lang:Language,
     private router: Router,
     private formBuilder: FormBuilder) { }

  title = 'angulardatatables';
 // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};

  ngOnInit() {
    this.LoadData(this.p);
  
    // this.LoadData(this.p);
    // this.dtOptions = {
    //   pagingType: 'full_numbers',
    //   pageLength: 5,
    //   processing: true,
    //   responsive: true,
    //   order: [0, 'desc'],
    //   dom: '<lf<Bt>ip>',
    //   buttons: [
    //     // 'columnsToggle',
    //     'colvis',
    //     'copy',
    //     'print',
    //     'excel',
    //   ]
    // }
    this.TrucksForm = this.formBuilder.group({
      DummyKey:[''],
      TransporterID:[null],
      TruckSAPID:[''],
      TruckLicense:[''],
      TrailerLicense:[''],
      TrailerValid:[''],


    })
  }
 Save ()
 {
   if(this.TrucksForm.value.TrailerLicense=="") this.TrucksForm.value.TrailerLicense=null;
   if(this.TrucksForm.value.TruckLicense=="") this.TrucksForm.value.TruckLicense=null;

   debugger
  if(this.TrucksForm.value.TrailerLicense =="" &&this.TrucksForm.value.TruckLicense =="" ){
    Swal.fire("", this.translate.instant('Truck.ValidationLicense') , 'error')
     
    return 0;
   }
   else if(this.TrucksForm.value.TrailerLicense!=null &&
           this.TrucksForm.value.TruckLicense !=null)
   {
    Swal.fire("", this.translate.instant('Truck.ValidationLicense') , 'error')

   }
   else if (this.TrucksForm.valid) {

    this._managmentTransportationService.SaveTrucks(this.TrucksForm.value).subscribe((res) => {
      Swal.fire("", this.translate.instant('message.Done') , 'success')
      .then((value) => {
        this.router.navigateByUrl('/TransportationManagement');
      });
    });
  };
 
  

  //  debugger
  //  if(this.TrucksForm.value.TrailerLicense =="" &&this.TrucksForm.value.TruckLicense =="" ){
  //   Swal.fire("", this.translate.instant('Truck.ValidationLicense') , 'error')
     
  //   return 0;
  //  }
  //  else if (this.TrucksForm.valid) {

  //   this._managmentTransportationService.SaveTrucks(this.TrucksForm.value).subscribe((res) => {
  //     Swal.fire("", this.translate.instant('message.Done') , 'success')
  //     .then((value) => {
  //       this.router.navigateByUrl('/TransportationManagement');
  //     });
  //   });
  // }
 }
 GetTruckById (id,content)
 {
   debugger
    this._managmentTransportationService.GetTruckById(id).subscribe((res) => {
      this.TrucksForm = this.formBuilder.group({
        DummyKey:[res.LtmTruck.DummyKey],
        TransporterID:[res.LtmTruck.TransporterID],
        TruckSAPID:[res.LtmTruck.TruckSAPID],
        TruckLicense:[res.LtmTruck.TruckLicense],
        TrailerLicense:[res.LtmTruck.TrailerLicense],
        TrailerValid:[res.LtmTruck.TrailerValid]
      })
  });
 this. open(content);
  
 }
 
  LoadData(page)
  {
    this.spinner.show();
    this.p = page;
    debugger;
    this._reportService.getTrucks(page).subscribe((res) => {
      debugger;
      this.data = res.LtmTrucks as TrucksModelModule[];
      //this.total = res.TotalItems;
      this.total = res.TotalItems;

      window.scroll(0, 0);
      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();
    });
   // this.spinner.show();
    // this.p = page;
    // debugger;
    // this._reportService.getTrucks(page).subscribe((res) => {
    //   debugger;
    //   this.data = res.LtmTrucks as TrucksModelModule[];
    //   //this.total = res.TotalItems;
    //   window.scroll(0, 0);
    //   this.spinner.hide();
    // }, (err) => {
    //   this.spinner.hide();
    // });
  }

 

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
//https://l-lin.github.io/angular-datatables/#/extensions/buttons
// https://therichpost.com/angular-8-datatable-working-example/
//https://ng-bootstrap.github.io/#/components/modal/examples#basic