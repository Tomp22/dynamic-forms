export interface IInputForm {
    /** type of form */
    type: string;
    /** type of label */
    label: string;
    /** optional icon type */
    iconType?: string;
    /** is autocomplete on */
    autocomplete?: boolean;
    /** translation group */
    translationGroupPrefix: string;
    /** translation group */
    translationGroupLabelValue: string;
    /** translation group */
    translationGroupErrorValue1: string;
    /** translation group */
    translationGroupErrorValue2?: string;
    /** name of control */
    controlName: string;
}
