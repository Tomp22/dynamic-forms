import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  ElementRef,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ValidatorFn,
  FormGroupDirective,
  NgForm,
} from '@angular/forms';
import { observable } from 'rxjs';
import { IInputForm } from './model-inputForm';
import { ErrorStateMatcher } from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

/**
 *  UI Element UiInputFormComponent
 */
@Component({
  selector: 'app-ui-inputForm',
  templateUrl: './ui-inputForm.component.html',
  styleUrls: ['./ui-inputForm.component.scss'],
  host: { class: 'ui_input_form_class' },
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputFormComponent implements OnInit {
  /**
   * Value set by any Parent Component
   */
  @Input()
  set fieldsContent(content: IInputForm[]) {
    this.myFieldsContent = content;
    this.updateFields();
  }

  /**
   * Send Value to Any parent
   */
  @Output()
  fieldsValues: EventEmitter<any> = new EventEmitter<any>();

  /**
   * Input fields value
   */
  public myFieldsContent: IInputForm[] = [];

  /**
   * Angular Form Template
   */
  formTemplate: IInputForm[];

  /**
   * Angular Form Group
   */
  myFormGroup: FormGroup;

  /**
   *   Get My Insight
   * */
  get fieldsContent(): IInputForm[] {
    // transform value for display
    return this.myFieldsContent;
  }

  /**show hide icon (VISIBLITY EYE) in the loop */
  showIcon: any[] = [];

  constructor() {}

  ngOnInit() {
    this.formTemplate = this.myFieldsContent;
  }

  /**
   * load content to fields
   */
  updateFields(): void {
    if (this.myFieldsContent && this.myFieldsContent.length > 0) {
      let group = {} as any;

      this.fieldsContent.forEach((inputTemplate) => {
        if (inputTemplate.controlName === 'userFormControl') {
          group[inputTemplate.controlName] = new FormControl('', [
            Validators.required,
          ]);
        } else if (inputTemplate.controlName === 'loginFormControl') {
          group[inputTemplate.controlName] = new FormControl('', [
            Validators.required,
          ]);
        }
      });
      this.myFormGroup = new FormGroup(group);
    }
  }

  /**
   * Action on Button click
   */
  onSubmit(): void {
    this.fieldsValues.emit(this.myFormGroup.value); // return to parent
  }
}
