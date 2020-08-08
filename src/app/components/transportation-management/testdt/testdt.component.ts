import { Component, OnInit } from '@angular/core';
import { DriversModule } from 'src/app/models/drivers/drivers.module';
import { ReportsService } from 'src/app/services/reports.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { StaticListsService } from 'src/app/services/static-lists.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Language } from 'src/app/config/language';

@Component({
  selector: 'testdt',
  templateUrl: './testdt.component.html',
  styleUrls: ['./testdt.component.css']
})
export class TestdtComponent implements OnInit {
  p: number = 1;
  pageSize: number = 20;
  total: number = 0;
  data: DriversModule[];
  selectedPlants: string = "0";
  
  incoterms: string[];
  selectedInco: string;
  constructor(private _reportService: ReportsService, private spinner: NgxSpinnerService,
    private _lists: StaticListsService, private sanitizer: DomSanitizer,
    private lang: Language) {
      _lists.loadIncoTerms().subscribe((res) => {
        this.incoterms = res.IncoTerms as string[];
      });
    }
  
  ngOnInit() {
    this.loaddata(this.p);
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
}
