import { Component, OnInit } from '@angular/core';
import loginForm_formTemplate1 from './loginForm_formTemplate1';
import loginForm_formTemplate2 from './loginForm_formTemplate2';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  constructor() {}

  /**
   * pass to child form fileds from form_template
   * */
  public formFieldsSettings1: any[] = loginForm_formTemplate1;
  public formFieldsSettings2: any[] = loginForm_formTemplate2;
  /**
   *  value from child declaration
   */
  public receivedValues: any;
  /**
   * username value for form
   */
  public username: string;
  /**
   * password value for form
   */
  public password: string;

  ngOnInit(): void {}

  /**
   * values from Child
   * @param $event
   */
  inputFormReturnValues($event: any) {
    this.receivedValues = $event;
    console.log(this.receivedValues)

  }
}
