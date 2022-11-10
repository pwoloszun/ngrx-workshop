import { ValidatorFn } from '@angular/forms';

import { getCtrl } from '@utils/get-ctr';

export function ControlValuesEqualityValidator(targetCtrlName: string, compareCtrlName: string,): ValidatorFn {
  if (targetCtrlName === compareCtrlName) {
    throw new Error(`Cant pass same ctrl name`);
  }
  return (group) => {
    const targetCtrl = getCtrl(targetCtrlName, group);
    const compareCtrl = getCtrl(compareCtrlName, group);

    if (targetCtrl.value !== compareCtrl.value) {
      const error = {
        differentCtrlsValue: { target: targetCtrlName, compare: compareCtrlName }
      };
      targetCtrl.setErrors(error);
      return error;
    } else {
      return null;
    }
  };
}
