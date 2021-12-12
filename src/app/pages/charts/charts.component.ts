import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.scss']
})
export class ChartsComponent implements OnInit {

  myTestData:any[];
  constructor() { }

  ngOnInit(): void {

    this.myTestData = [123,22323,343443];

  }

}
