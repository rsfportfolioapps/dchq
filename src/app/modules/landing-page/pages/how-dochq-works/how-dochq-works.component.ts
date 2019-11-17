import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-how-dochq-works',
  templateUrl: './how-dochq-works.component.html',
  styleUrls: ['./how-dochq-works.component.scss']
})
export class HowDocHQWorksComponent implements OnInit {
  public environment = environment;

  constructor() { }

  ngOnInit(): void { }


}
