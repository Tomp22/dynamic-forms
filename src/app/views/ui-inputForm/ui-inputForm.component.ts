import {
  Component,
  Input,
  Output,
  OnInit,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IInputForm } from './model-inputForm';

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
export class UiInputFormComponent{
  /**
   * Value set by any Parent Component
   */
  @Input()
  set fieldsContent(content: IInputForm[]) {
    this.myFieldsContent = content;
    this.updateFields();
  }
  /**
   *   Get My Insight
   * */
  get fieldsContent(): IInputForm[] {
    // transform value for display
    return this.myFieldsContent;
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
   * Angular Form Group
   */
  myFormGroup: FormGroup;

  /**show hide icon (VISIBLITY EYE) in the loop */
  showIcon: any[] = [];

  constructor() {}
  /**
   * load content to fields
   */
  updateFields(): void {
    if (this.myFieldsContent && this.myFieldsContent.length > 0) {

      // declare form group
      const group = {} as any;

      this.fieldsContent.forEach((inputTemplate) => {
        group[inputTemplate.controlName] = new FormControl('', [
              Validators.required,
            ]);
        // if (inputTemplate.controlName === 'userFormControl') {
        //   group[inputTemplate.controlName] = new FormControl('', [
        //     Validators.required,
        //   ]);
        // } else if (inputTemplate.controlName === 'loginFormControl') {
        //   group[inputTemplate.controlName] = new FormControl('', [
        //     Validators.required,
        //   ]);
        // }
        // else if (inputTemplate.controlName === 'loginFormControlMatch') {
        //   group[inputTemplate.controlName] = new FormControl('', [
        //     Validators.required,
        //   ]);
        // }
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
