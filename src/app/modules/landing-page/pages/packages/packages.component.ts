import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.scss']
})

export class PackagesComponent implements OnInit {
  public environment = environment;
  public onHoverClass: string = '';

  public packages: any[] = [
    {
      title: 'Back to Work Lite',
      curValue: '8.90',
      checkList: [
        { text: 'Mobile app', check: true },
        { text: 'Phone & video consultations', check: true },
        { text: 'Prescriptions & medication delivery', check: true },
        { text: 'Sick notes & HR administrative support', check: true },
        { text: 'Follow-up care via email', check: true },
        { text: 'Annual health check', check: false },
        { text: 'Face-to-face consultation', check: false }
      ],
      btnClass: 'btn-black',
      btnText: 'Register Online',
      url: environment.url.packages.packageBackToWorkLite
    },
    {
      title: 'Back to Work',
      curValue: '14.50',
      checkList: [
        { text: 'Mobile app', check: true },
        { text: 'Phone & video consultations', check: true },
        { text: 'Prescriptions & medication delivery', check: true },
        { text: 'Sick notes & HR administrative support', check: true },
        { text: 'Follow-up care via email', check: true },
        { text: 'Annual health check', check: true },
        { text: 'Face-to-face consultation', check: true }
      ],
      btnClass: 'btn-primary',
      btnText: 'Speak with us',
      url: environment.url.packages.packagesBackToWork
    },
    {
      title: 'DocHQ Wellness',
      curValue: '29.90',
      checkList: [
        { text: 'Mobile app', check: true },
        { text: 'Phone & video consultations', check: true },
        { text: 'Prescriptions & medication delivery', check: true },
        { text: 'Sick notes & HR administrative support', check: true },
        { text: 'Follow-up care via email', check: true },
        { text: 'Annual health check', check: true },
        { text: 'Face-to-face consultation', check: true },
        { text: 'DocHQ Wellness is a personalised package which can include mental health assessments & counselling, occupational health services, options to include second opinions & much more.', check: true }
      ],
      btnClass: 'btn-red',
      btnText: 'Speak with us',
      url: environment.url.packages.packagesWellness
    }
  ]

  constructor() { }

  state: string = 'small';
  ngOnInit(): void { }

  public onHover(event: any): void {
    if (event === 'small')
      event = 'large';
  }

  public onLeave(event: any): void {
    if (event === 'large')
      event = 'small';
  }
}
