import {Component, OnInit} from '@angular/core';
import {ChartDataSets, ChartOptions} from 'chart.js';
import {Label} from 'ng2-charts';

@Component({
   selector: 'app-dashboard',
   templateUrl: './dashboard.component.html',
   styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
   public lineChartType = 'line';
   lineChartData: ChartDataSets[] = [{ data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' }];

   lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

   options: ChartOptions & { annotation: any } = {
      responsive: true,
      scales: {
         // We use this empty structure as a placeholder for dynamic theming.
         xAxes: [{}],
         yAxes: [
            {
               id: 'y-axis-0',
               position: 'left',
            },
            {
               id: 'y-axis-1',
               position: 'right',
               gridLines: {
                  color: 'rgba(255,0,0,0.3)',
               },
               ticks: {
                  fontColor: 'red',
               },
            },
         ],
      },
      annotation: {
         annotations: [
            {
               type: 'line',
               mode: 'vertical',
               scaleID: 'x-axis-0',
               value: 'March',
               borderColor: 'orange',
               borderWidth: 2,
               label: {
                  enabled: true,
                  fontColor: 'orange',
                  content: 'LineAnno',
               },
            },
         ],
      },
   };

   constructor() {}

   ngOnInit(): void {}
}
