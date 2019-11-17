import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-we-work-with',
  templateUrl: './we-work-with.component.html',
  styleUrls: ['./we-work-with.component.scss']
})
export class WeWorkWithComponent implements OnInit {
  public companies: any = [
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    },
    {
      image: 'https://via.placeholder.com/150'
    },
  ]

  constructor() { }

  ngOnInit(): void { }
}
