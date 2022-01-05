import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { DynamicFormComponent } from './pages/dynamic-form/dynamic-form.component';


const routes: Routes = [

  {
    path: "", component: HomeComponent
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
