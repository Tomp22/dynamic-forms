import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProgramikiComponent } from './pages/programiki/programiki.component';
import { TableComponent } from './pages/table/table.component';
import { HomeComponent } from './pages/home/home.component';
import { ApiServicesComponent } from './pages/api-services/api-services.component';
import { ApiNGRXEntityComponent } from './pages/api-ngrxentity/api-ngrxentity.component';
import { ApiNGRXDataComponent } from './pages/api-ngrxdata/api-ngrxdata.component';
import { ChartsComponent } from './pages/charts/charts.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';


const routes: Routes = [

  {
    path: "", component: HomeComponent
},
{
    path: "table", component: TableComponent
},
{
  path: "programiki", component: ProgramikiComponent
},
{
  path: "api-services", component: ApiServicesComponent
},
{
  path: "api-ngrx-entity", component: ApiNGRXEntityComponent
},
{
  path: "api-ngrx-data", component: ApiNGRXDataComponent
},
{
  path: "charts", component: ChartsComponent
},
{
  path: "dynamic-forms", component: DynamicFormComponent
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {




}
