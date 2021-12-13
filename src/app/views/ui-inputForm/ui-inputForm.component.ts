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
} from "@angular/core";
import {
    FormControl,
    FormGroup,
    Validators,
    ValidatorFn,
  FormGroupDirective, NgForm,
} from "@angular/forms";
import { observable } from "rxjs";
import { IInputForm } from "./model-inputForm";
import {ErrorStateMatcher} from '@angular/material/core';

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

/**
 *  UI Element UiInputFormComponent
 */
@Component({
    selector: "app-ui-inputForm",
    templateUrl: "./ui-inputForm.component.html",
    styleUrls: ["./ui-inputForm.component.scss"],
    host: { class: "ui_input_form_class" },
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiInputFormComponent implements OnInit {
    /**
     *   Get My Insight
     * */
    get fieldsContent(): IInputForm[] {
        // transform value for display
        return this.myFieldsContent;
    }

    @ViewChild("formRecipe", { static: true }) formRecipe: any;

    /**
     * Value set by any Parent Component
     */
    @Input()
    set fieldsContent(content: IInputForm[]) {
        this.myFieldsContent = content;

       // this.updateFields();
    }
    /**
     * additonal options
     */
    @Input()
    options?: any;

    @Input()
    resetInputTypeOnLoad?: boolean;

    @Input()
    resetInputTypeOnClose?: boolean;
    /**
     * Send Value to Any parent
     */
    @Output()
    fieldsValues: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Send Value to Any parent
     */
    @Output()
    formValidation: EventEmitter<any> = new EventEmitter<any>();

    /**
     * Input fields value
     */
    public myFieldsContent: IInputForm[] = [];

    public showForm: boolean = true;

    /**
     * Angular Form Group
     */
    myFormGroup: FormGroup;

    /**
     * Angular Form Template
     */
    formTemplate: IInputForm[];

    /**
     * type of input (password, text, etc)
     */
    public inputType: string;

    /**
     * type of icon in input form
     */
    public inputTypeIcon: string;

    public newPasswordFieldValue: string;

    public activateButton: boolean;

    public val1: string;
    public val2: string;

    /**show hide icon (VISIBLITY EYE) in the loop */
    showIcon = [];

    /**
     * switch border on/off
     */
    public switchBorder: boolean;

    constructor(private changeDetectorRef: ChangeDetectorRef) {}
    ngOnChanges(): any {
        if (this.resetInputTypeOnClose) {
            // this.formRecipe.reset();loginFormControl
            this.myFormGroup.controls["loginFormControl"].setValue("");
            this.resetInputTypeOnClose = false;
        }

        if (this.resetInputTypeOnLoad) {
            this.showForm = false;
            setTimeout(() => {
                this.myFormGroup.reset();
            }, 1000);
        } else {
            this.showForm = true;
        }
    }

    /**
     * Angular Specific, lifecycle hook (ngOnIniit)
     * [More Info] {@link https://angular.io/api/core}
     */
    ngOnInit(): any {
        this.formTemplate = this.myFieldsContent;
        // show hide password
        this.inputType = "password";
        this.inputTypeIcon = "visibility";
        if (this.options) {
            this.switchBorder = this.options.switchBorder;
            if (this.options.clearFields) {
                if (this.myFormGroup.valueChanges) {
                    this.myFormGroup.reset();
                }
            }
            // setTimeout(() => {
            //     if (this.myFormGroup.statusChanges !== null) {
            //         this.myFormGroup
            //             .get("newPasswordFormControl")
            //             .valueChanges.subscribe((val) => {
            //                 this.fieldsValues.emit(val); // validate in parent

            //                 if (
            //                     this.myFormGroup.controls[
            //                         "confirmPasswordFormControl"
            //                     ].status !== "VALID" &&
            //                     this.stringCompare(
            //                         this.myFormGroup.controls[
            //                             "newPasswordFormControl"
            //                         ].value,
            //                         this.myFormGroup.controls[
            //                             "confirmPasswordFormControl"
            //                         ].value
            //                     )
            //                 ) {
            //                     // if confirmPasswordFormControl is invalid but the Passwords match
            //                     this.myFormGroup.controls[
            //                         "confirmPasswordFormControl"
            //                     ].updateValueAndValidity();
            //                 } else if (
            //                     this.myFormGroup.controls[
            //                         "confirmPasswordFormControl"
            //                     ].status === "VALID" &&
            //                     !this.stringCompare(
            //                         this.myFormGroup.controls[
            //                             "newPasswordFormControl"
            //                         ].value,
            //                         this.myFormGroup.controls[
            //                             "confirmPasswordFormControl"
            //                         ].value
            //                     )
            //                 ) {
            //                     // if confirmPasswordFormControl is valid but the Passwords DON'T match
            //                     this.myFormGroup.controls[
            //                         "confirmPasswordFormControl"
            //                     ].updateValueAndValidity();
            //                 } else {
            //                     this.myFormGroup.updateValueAndValidity();
            //                     this.formValidation.emit(
            //                         this.myFormGroup.status === "VALID"
            //                     );
            //                 }
            //             });

            //         this.myFormGroup
            //             .get("confirmPasswordFormControl")
            //             .valueChanges.subscribe((val) => {
            //                 //this.fieldsValues.emit(val); // validate in parent

            //                 if (
            //                     this.myFormGroup.controls[
            //                         "confirmPasswordFormControl"
            //                     ].status === "VALID" &&
            //                     this.myFormGroup.controls[
            //                         "newPasswordFormControl"
            //                     ].status !== "VALID"
            //                 ) {
            //                     // if I am valid, double check other field
            //                     this.myFormGroup.controls[
            //                         "newPasswordFormControl"
            //                     ].updateValueAndValidity();
            //                 } else {
            //                     this.myFormGroup.updateValueAndValidity();
            //                     this.formValidation.emit(
            //                         this.myFormGroup.status === "VALID"
            //                     );
            //                 }
            //             });
            //     }
            // }, 1000);
        }
    }

    emailFormControl = new FormControl('', [Validators.required, Validators.email]);

    matcher = new MyErrorStateMatcher();

    /**
     * show user password true false (eye icon on UI) =
     * @deprecated
     */
    showPassword(): void {
        // this.inputType === "password" ? this.inputType = "text" : this.inputType = "password";
        // this.inputTypeIcon === "visibility" ? this.inputTypeIcon = "visibility_off" : this.inputTypeIcon = "visibility";
    }

    /**
     * Action on Button click
     */
    onSubmit(): void {
        this.fieldsValues.emit(this.myFormGroup.value); // return to parent
    }

    /**
     * load content to fields
     */
    updateFields(): void {
        if (this.myFieldsContent && this.myFieldsContent.length > 0) {
            let group: any;
            let pattern =
                "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[-!@#$%^*&()_+{}'|/\=/\[\\]])[A-Za-z\\d-!@#$%^*&()_+{}'|/\=/\[\\]]{8,}$"; // company policy
            this.fieldsContent.forEach((inputTemplate) => {
                if (
                    inputTemplate.controlName === "verificationCodeFormControl"
                ) {
                    group[inputTemplate.controlName] = new FormControl("", [
                        // Validators.required,
                        Validators.pattern(pattern),
                    ]);
                } else if (
                    inputTemplate.controlName === "newPasswordFormControl"
                ) {
                    group[inputTemplate.controlName] = new FormControl("", [
                        Validators.required,
                        Validators.pattern(pattern),
                    ]);
                } else if (
                    inputTemplate.controlName === "confirmPasswordFormControl"
                ) {
                    group[inputTemplate.controlName] = new FormControl("", [
                        Validators.required,
                        // this.passwordMatchValidator("newPasswordFormControl"),
                    ]);
                } else {
                    group[inputTemplate.controlName] = new FormControl("", [
                        Validators.required,
                    ]);
                }
            });
            this.myFormGroup = new FormGroup(group);
        }
    }

    /** string compare */
    // stringCompare(inStr1: string, inStr2: string): boolean {
    //     const temp1: string = inStr1 ? inStr1 : "";
    //     const temp2: string = inStr2 ? inStr2 : "";

    //     return temp1 === temp2;
    // }

    /** validation for new and old */
    // passwordMatchValidator(password: string): ValidatorFn {
    //     return (control: FormControl) => {
    //         if (!control || !control.parent) {
    //             return null;
    //         } else {
    //             if (
    //                 this.stringCompare(
    //                     control.value,
    //                     control.parent.get(password).value
    //                 )
    //             ) {
    //                 // passwords match
    //                 return null;
    //             } else {
    //                 // return validation error
    //                 let temp = {};
    //                 temp["passwordDontMatch"] = true;
    //                 return temp;
    //             }
    //         }
    //     };
    // }
}
