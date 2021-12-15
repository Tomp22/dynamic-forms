const form_template = [
  {
    type: 'textBox',
    translationGroupPrefix: 'login',
    translationGroupLabelValue: 'userEmail',
    translationGroupErrorValue1: 'noName',
    iconType: 'close',
    controlName: 'userFormControl',
  },
  {
    type: 'inputType',
    translationGroupPrefix: 'login',
    translationGroupLabelValue: 'userPassword',
    translationGroupErrorValue1: 'noPassword',
    iconType: 'close',
    controlName: 'loginFormControl',
  },
  {
    type: 'inputType',
    translationGroupPrefix: 'login',
    translationGroupLabelValue: 'userPasswordMatch',
    translationGroupErrorValue1: 'noMatchPassword',
    iconType: 'close',
    controlName: 'loginFormControl',
  },
];
export default form_template;
