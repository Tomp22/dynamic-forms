import { Component, OnInit } from '@angular/core';
import { myDataService } from '../../shared/services/myData.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-api-services',
  templateUrl: './api-services.component.html',
  styleUrls: ['./api-services.component.scss'],
})
export class ApiServicesComponent implements OnInit {
  monstersData$: Observable<any>;
  monstersData2$: Observable<any>;
  monstersData3$: Observable<any>;
  baseUrl = 'https://www.dnd5eapi.co/api/';

  constructor(private myDataService: myDataService, private http: HttpClient) {}

  ngOnInit() {
    this.load();
  }

  load() {
    this.monstersData$ = this.myDataService.getSpecificURLForAsync('results');
    this.monstersData2$ =
      this.myDataService.getSpecificURLForAsync2('features');
    this.monstersData3$ = this.myDataService.getSpecificURLForAsync2(
      'monsters/adult-black-dragon/'
    );
  }
}

//monsters/adult-black-dragon/
