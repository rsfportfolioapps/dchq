import { Component, OnInit, ElementRef, ViewChild, ChangeDetectorRef, AfterViewInit } from '@angular/core';
import * as Chart from 'chart.js'

@Component({
  selector: 'app-eco-benefit',
  templateUrl: './eco-benefit.component.html',
  styleUrls: ['./eco-benefit.component.scss']
})
export class EcoBenefitComponent implements OnInit, AfterViewInit {
  public canvas: any;
  public ctx: any;
  public myChart: any = [];

  @ViewChild('myChart') canvasRef: ElementRef;

  constructor(private cdRef: ChangeDetectorRef) {
  }

  ngAfterViewInit(): void {
    this.ctx = this.canvasRef.nativeElement.getContext('2d');
    this.myChart = new Chart(this.ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [86, 14],
          backgroundColor: ['#e5014d', '#333333'],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        cutoutPercentage: 70,
        tooltips: { enabled: false },
        hover: { mode: null },
        animation: {
          animateScale: true,
          animateRotate: true
        }
      }
    });

    this.cdRef.detectChanges();
  }

  ngOnInit(): void { }
}
