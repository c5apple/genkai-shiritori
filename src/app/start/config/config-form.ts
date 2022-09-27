import { Validators, FormControl, ValidationErrors } from '@angular/forms';

/**
 * 各種設定
 * 入力フォーム
 */
export class ConfigForm {
  /** 持ち時間(分) */
  timeLimitMinute: number = 0;
  /** 持ち時間(秒) */
  timeLimitSecond: number = 0;
  /** 最小文字数 */
  minNumber: number = 0;
  /** 最大文字数 */
  maxNumber: number = 0;

  static validators = {
    /** 持ち時間(分) */
    timeLimitMinute: ['', Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.max(15),
      Validators.pattern(/^\d+$/),
      Validators.maxLength(2)
    ])],
    /** 持ち時間(秒) */
    timeLimitSecond: ['', Validators.compose([
      Validators.required,
      Validators.min(0),
      Validators.max(59),
      Validators.pattern(/^\d+$/),
      Validators.maxLength(2)
    ])],
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
    return {};
  }
}
