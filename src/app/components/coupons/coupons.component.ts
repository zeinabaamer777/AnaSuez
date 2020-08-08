import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { CouponModel } from 'src/app/models/CouponModel';
import { Language } from 'src/app/config/language';
import { NgxSpinnerService } from "ngx-spinner";
import { PLantModel } from 'src/app/models/PlantModel';
import { PlantService } from 'src/app/services/plant.service';
import { DomSanitizer } from '@angular/platform-browser';

import * as FileSaver from 'file-saver';

import * as XLSX from 'xlsx';
import { Options } from 'ngx-animating-datepicker';

import { StaticListsService } from 'src/app/services/static-lists.service';
import { TestBed } from '@angular/core/testing';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-coupons',
  templateUrl: './coupons.component.html',
  styleUrls: ['./coupons.component.css']
})


// @Pipe({ name: 'myPipe'})
// export class MyPipe implements PipeTransform{
//   dp:DatePipe;
//   transform(val) {
//     return this.dp.transform(val, 'yyyy-MM-dd', 'es-ES');
//   } 
// }

export class CouponsComponent implements OnInit {

  p: number = 1;
  pageSize: number = 20;
  total: number = 0;
  selectedPlants: string = "0";
  plants: PLantModel[];
  selectedDateFrom = null;
  selectedDateTo = null;
 
  incoterms: string[];
  selectedInco:string;
  coupons: CouponModel[];
  constructor(private _lists: StaticListsService, private sanitizer: DomSanitizer, private _plantService: PlantService, private _reportService: ReportsService, private lang: Language, private spinner: NgxSpinnerService) {
    _lists.loadIncoTerms().subscribe((res)=>{
      this.incoterms=res.IncoTerms as string[];
      debugger;
    });
   }

  
  datepickerOptions: Options = {
    selectMultiple: false, // Select multiple dates
    closeOnSelect: false, // Close datepicker when date(s) selected
    animationSpeed: 400, // Animation speed in ms
    easing: '', // Easing type string
    hideRestDays: false, // Hide the rest days
    disableRestDays: true, // Disable the click on rest days
    hideNavigation: false, // Hide the navigation
    range: false, // Use range functionality
    currentDate: new Date(), // Tne current displayed date (month, year)
    timeoutBeforeClosing: 5000, // The timeout / delay before closing
    weekdayFormat: 'short', // "narrow", "short", "long"
    weekStart: 'monday' // Set the week start day
  };

  HandelDate(val)
  {
    this.selectedDateFrom="test";
  }
 
  saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }


  exportAsExcelFile(json: any[], excelFileName: string): void {
    debugger;
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.spinner.hide();
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }

  filter() {
    this.p = 1;
    this.loadCoupons(this.p);
    debugger;
  }



  export() {

    if (this.selectedPlants == "0") {
      this.selectedPlants = "";
    }
    this.spinner.show();
    this._reportService.ExportCoupons(1, "", this.selectedPlants, "", "", this.selectedDateFrom ? this.selectedDateFrom[0].toLocaleDateString() : "", this.selectedDateTo ? this.selectedDateTo[0].toLocaleDateString() : "",this.selectedInco?this.selectedInco:"").subscribe((res) => {

      this.exportAsExcelFile(JSON.parse(res).coupons, 'coupons');
    }, (err) => {
      this.spinner.hide();
    });
  }
  loadCoupons(page) {


    this.spinner.show();
    this.p = page;
    if (this.selectedPlants == "0") {
      this.selectedPlants = "";
    }
    debugger;
    this._reportService.getCoupons(page, "", this.selectedPlants, "", "", this.selectedDateFrom ? this.selectedDateFrom[0].toLocaleDateString() : "", this.selectedDateTo ? this.selectedDateTo[0].toLocaleDateString() : "",this.selectedInco?this.selectedInco:"").subscribe((res) => {
      this.coupons = res.coupons as CouponModel[];
      this.total = res.TotalItems;
      window.scroll(0, 0);
      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();
    });
  }
  ngOnInit() {
    this.loadCoupons(this.p);
    this._plantService.loadPlants().subscribe((res) => {
      this.plants = res.Plants as PLantModel[];
    });

  }

}
