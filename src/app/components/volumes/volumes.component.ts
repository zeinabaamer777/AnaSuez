import { Component, OnInit } from '@angular/core';
import { ReportsService } from 'src/app/services/reports.service';
import { VolumesModel } from 'src/app/models/VolumesModel';
import { NgxSpinnerService } from 'ngx-spinner';
import { PLantModel } from 'src/app/models/PlantModel';
import { StaticListsService } from 'src/app/services/static-lists.service';
import { DomSanitizer } from '@angular/platform-browser';
import { PlantService } from 'src/app/services/plant.service';
import { Language } from 'src/app/config/language';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
@Component({
  selector: 'app-volumes',
  templateUrl: './volumes.component.html',
  styleUrls: ['./volumes.component.css']
})
export class VolumesComponent implements OnInit {

  p: number = 1;
  pageSize: number = 20;
  total: number = 0;
  volumes: VolumesModel[];
  selectedPlants: string = "0";
  plants: PLantModel[];
  incoterms: string[];
  selectedInco: string;

  constructor(private _reportService: ReportsService, private spinner: NgxSpinnerService,
    private _lists: StaticListsService, private sanitizer: DomSanitizer,
    private _plantService: PlantService, private lang: Language) {
    _lists.loadIncoTerms().subscribe((res) => {
      this.incoterms = res.IncoTerms as string[];
    });
    // this._plantService.loadPlants().subscribe((res) => {
    //   this.plants = res.Plants as PLantModel[];
    // });
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
  export() {


    this.spinner.show();
    this._reportService.ExportVolumes(this.selectedInco ? this.selectedInco : "").subscribe((res) => {
     
      this.exportAsExcelFile(JSON.parse(res).volumes, 'volumes');
    }, (err) => {
      this.spinner.hide();
    });
  }
  loadVolumes(page) {
    this.spinner.show();
    this.p = page;
    debugger;
    this._reportService.getVolumes(page, this.selectedInco ? this.selectedInco : "").subscribe((res) => {
      debugger;
      this.volumes = res.volumes as VolumesModel[];
      this.total = res.TotalItems;
      window.scroll(0, 0);
      this.spinner.hide();
    }, (err) => {
      this.spinner.hide();
    });
  }
  ngOnInit() {
    this.loadVolumes(this.p);

  }

}
