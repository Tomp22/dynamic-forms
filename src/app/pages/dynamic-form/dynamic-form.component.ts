import { Component, OnInit } from '@angular/core';
import loginForm_formTemplate from './loginForm_formTemplate';

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
  public formFieldsSettings: any[] = loginForm_formTemplate;
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
    this.username = JSON.parse(
      JSON.stringify(this.receivedValues.userFormControl)
    );
    this.password = JSON.parse(
      JSON.stringify(this.receivedValues.loginFormControl)
    );
  }
}
