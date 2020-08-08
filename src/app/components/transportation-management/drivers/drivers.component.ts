import {AfterViewInit, ViewChild, Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { DriversModule, DataTablesResponse } from 'src/app/models/drivers/drivers.module';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { TranslateService } from '@ngx-translate/core';
import { Language } from 'src/app/config/language';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { HttpClient } from '@angular/common/http';
import { StaticListsService } from 'src/app/services/static-lists.service';
import { DomSanitizer } from '@angular/platform-browser';

// interface Scripts {
//   name: string;
//   src: string;
// }
// export const ScriptStore: Scripts[] = [
//   { name: '12', src: 'https://code.jquery.com/jquery-3.5.1.js'},
//   { name: '1', src: 'https://cdn.datatables.net/buttons/1.6.2/js/dataTables.buttons.min.js'},
//   { name: 'f2awryPlugin', src: 'https://cdn.datatables.net/buttons/1.6.2/js/buttons.flash.min.js'},
//   { name: 'fa2wryPlugin', src: 'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.1.3/jszip.min.js'},
//   { name: 'fawryPlugin', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/pdfmake.min.js'},
//   { name: 'faw2ryPlugin', src: 'https://cdnjs.cloudflare.com/ajax/libs/pdfmake/0.1.53/vfs_fonts.js'},
//   { name: 'fawr2yPlugin', src: ' https://cdn.datatables.net/buttons/1.6.2/js/buttons.html5.min.js'},
//   { name: 'fawry2Plugin', src: ' https://cdn.datatables.net/buttons/1.6.2/js/buttons.print.min.js'}

// ];
 

@Component({
  selector: 'drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.css']
})

export class DriversComponent implements OnInit {
  // p: number = 1;
  // data: DriversModule[];
   closeResult = '';
   DriverForm: FormGroup;
  // driverModel: DriversModule[];
  // dtTrigger: Subject<any> = new Subject();
  // total:100;
  p: number = 1;
  pageSize: number = 20;
  total: number = 0;
  data: DriversModule[];
  selectedPlants: string = "0";
  
  incoterms: string[];
  selectedInco: string;
 

  constructor(private _reportService: ReportsService,
     private spinner: NgxSpinnerService,
     private modalService: NgbModal,
     private _managmentTransportationService:ReportsService,
     private translate: TranslateService,
     public lang:Language,
     private router: Router,
     private formBuilder: FormBuilder,
     private cd: ChangeDetectorRef,
     private http: HttpClient,
     private _lists: StaticListsService, private sanitizer: DomSanitizer,
    ) {
      _lists.loadIncoTerms().subscribe((res) => {
        this.incoterms = res.IncoTerms as string[];
      });
    }

  title = 'angulardatatables';
  //dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
 // dtOptions: DataTables.Settings = {};
 
 ngOnInit(): void {
  this.loaddata(this.p);
  this.DriverForm = this.formBuilder.group({
    DummyKey:[''],
    TransporterID:[''],
    DriverID:[''],
    DriverName:[''],
    DriverLiscense:[''],
    DriverMobileNumber:[''],
    UpdateRequest:[''],
    LicValid:['']
  })
}
loaddata(page) {
  this.spinner.show();
  this.p = page;
  debugger;
  this._reportService.getDrivers(page).subscribe((resp) =>  {
    this.data = resp.LtmDriverses as DriversModule[];
    this.total = resp.TotalItems;
    window.scroll(0, 0);
    this.spinner.hide();
  }, (err) => {
    this.spinner.hide();
  });
}
 
 Save ()
 {
   
    this._managmentTransportationService
    .SaveDriver(this.DriverForm.value).subscribe((res) => {
      Swal.fire("", this.translate.instant('message.Done') , 'success')
      
      .then((value) => {
        debugger
        this.router.navigateByUrl('/TransportationManagement');
      });
    });
  }
 GetDriverById (id,content)
 {
   debugger
    this._managmentTransportationService.GetDriverById(id).subscribe((res) => {
      debugger
      this.DriverForm = this.formBuilder.group({
        DummyKey:[res.LtmDriver.DummyKey],
        TransporterID:[res.LtmDriver.TransporterID],
        DriverID:[res.LtmDriver.DriverID],
        DriverName:[res.LtmDriver.DriverName],
        DriverLiscense:[res.LtmDriver.DriverLiscense],
        DriverMobileNumber:[res.LtmDriver.DriverMobileNumber],
        UpdateRequest:[res.LtmDriver.UpdateRequest],
        LicValid:[res.LtmDriver.LicValid]
      })
  });
 this. openDriverModel(content);
  
 }
//  ngOnDestroy(): void {
//   this.dtTrigger.unsubscribe();
// }
  LoadData(page)
  {
   // this.spinner.show();
    this.p = page;
    debugger;
    this._reportService.getDrivers(page).subscribe((result) => {
      debugger;
      this.data = result.LtmDriverses as DriversModule[];
    //  / this.dtTrigger.next();

      //this.total = res.TotalItems;
      window.scroll(0, 0);
      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();
    });
  }

 

  openDriverModel(content) {
    debugger
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
     
  // ngAfterViewInit(): void {
  //   this.dtTrigger.next();
  // }
    
  // ngOnDestroy(): void {
  //   // Do not forget to unsubscribe the event
  //   this.dtTrigger.unsubscribe();
  // }
    
  // rerender(): void {
  //   this.dtOptions.dtInstance.then((dtInstance: DataTables.Api) => {
  //     // Destroy the table first
  //     dtInstance.destroy();
  //     // Call the dtTrigger to rerender again
  //     this.dtTrigger.next();
  //   });
  }

//https://l-lin.github.io/angular-datatables/#/extensions/buttons
// https://therichpost.com/angular-8-datatable-working-example/
//https://ng-bootstrap.github.io/#/components/modal/examples#basic