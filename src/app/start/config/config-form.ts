import { Validators, FormControl, ValidationErrors } from '@angular/forms';

/**
 * 各種設定
 * 入力フォーム
 */
export class ConfigForm {
  /** 最小文字数 */
  minNumber: number;
  /** 最大文字数 */
  maxNumber: number;

  static validators = {
    /** 最小文字数 */
    minNumber: ['', Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.max(13),
      Validators.pattern(/^\d+$/),
      Validators.maxLength(2),
      ConfigForm.lessThan])],
    /** 最大文字数 */
    maxNumber: ['', Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.max(13),
      Validators.pattern(/^\d+$/),
      Validators.maxLength(2),
      ConfigForm.lessThan])]
  };

  /**
   * 最小文字数が最大文字数以下か
   */
  static lessThan(control: FormControl): ValidationErrors {
    const minNumber = document.querySelector('select[formcontrolname="minNumber"]') as HTMLInputElement;
    const maxNumber = document.querySelector('select[formcontrolname="maxNumber"]') as HTMLInputElement;
    if (minNumber && maxNumber && minNumber.value && maxNumber.value && Number(minNumber.value) > Number(maxNumber.value)) {
      return { lessThan: true };
    }
    control.markAsDirty({ onlySelf: false });
    return null;
  }
}
