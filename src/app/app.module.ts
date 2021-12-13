import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { myDataService } from './shared/services/myData.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from 'src/app/shared/pipes/filterSearch.pipe';
import { TableComponent } from './pages/table/table.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgramikiComponent } from './pages/programiki/programiki.component';
import { ApiServicesComponent } from './pages/api-services/api-services.component';
import { ApiNGRXEntityComponent } from './pages/api-ngrxentity/api-ngrxentity.component';
import { ApiNGRXDataComponent } from './pages/api-ngrxdata/api-ngrxdata.component';
import { ChartJSComponent } from './views/chart-js/chart-js.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { ThemeService } from 'ng2-charts';
import { NgChartsModule } from 'ng2-charts';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';
import { UiInputFormComponent } from './views/ui-inputForm/ui-inputForm.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/app.material.module';
import { ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    TableComponent,
    MenuComponent,
    HomeComponent,
    ProgramikiComponent,
    ApiServicesComponent,
    ApiNGRXEntityComponent,
    ApiNGRXDataComponent,
    ChartJSComponent,
    ChartsComponent,
    DynamicFormComponent,
    UiInputFormComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [myDataService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
