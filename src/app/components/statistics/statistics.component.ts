import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';
import { DatePipe } from '@angular/common';
import { ReportsService } from 'src/app/services/reports.service';
import { ChartsModel } from 'src/app/models/ChartsModel';
import * as Chart from 'chart.js';
import { stringify } from 'querystring';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements AfterViewInit {

  chartModel: ChartsModel;

  public monthbarChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{



      }], yAxes: [{
        scaleLabel: {
          labelString: "Tons",
          display: true
        },
        ticks: {
          max: 3,
          min: 0,
          stepSize: 1,
          callback: function (value, index, values) {
            return value + "K";
          }
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public yearbarChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      xAxes: [{



      }], yAxes: [{
        scaleLabel: {
          labelString: "Tons",
          display: true
        },
        ticks: {
          max: 6,
          min: 0,
          stepSize: 2,
          callback: function (value, index, values) {
            return value + "K";
          }
        }
      }]
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  @ViewChild('lineChart', { static: false }) lineChart: ElementRef;
  @ViewChild('lineChartyear', { static: false })  lineChartyear: ElementRef;
 
  chart: any;
  chartyear: any;
// ['2019', '2020', '', '', '', '', '']
  public barChartLabels: Label[] = [];
  public yearbarChartLabels: Label[];
  public barChartLegend = true;

  constructor(private dtpipe: DatePipe, private _report: ReportsService) {

  }
  ngAfterViewInit(): void {
    debugger;
    var lastMonth = new Date();
    lastMonth.setMonth(lastMonth.getMonth() - 1);

    var last2Monthw = new Date();
    last2Monthw.setMonth(last2Monthw.getMonth() - 2);


    var thisYear = new Date().getFullYear();

    var lastYear = new Date();
    lastYear.setFullYear(lastYear.getFullYear() - 1);

debugger;
    this.barChartLabels = [this.dtpipe.transform(last2Monthw, 'MMM y'), this.dtpipe.transform(lastMonth, 'MMM y'), '', '', '', ''];
    this.yearbarChartLabels= [thisYear.toString() ,this.dtpipe.transform(lastYear,'yyyy'), '', '', '', ''];


    this._report.getVolumesChart().subscribe((res) => {

      let obj = JSON.parse(res);
      obj.Chart.forEach(obj => {
        obj.backgroundColor = '#008238';
      });
      debugger;
      this.chart = new Chart(this.lineChart.nativeElement, {
        type: 'bar',
        data: {
          labels: this.barChartLabels,
          datasets: obj.Chart
        },
        options: this.monthbarChartOptions
      });



    });




    this._report.getVolumesChartyear().subscribe((res) => {
      let obj = JSON.parse(res);
      obj.Chart.forEach(obj => {
        obj.backgroundColor = '#008238';
      });

      this.chartyear = new Chart(this.lineChartyear.nativeElement, {
        type: 'bar',
        data: {
          labels: this.yearbarChartLabels,
          datasets: obj.Chart
        },
        options: this.yearbarChartOptions
      });


    });

  }

  ngOnInit() {


  }


}
