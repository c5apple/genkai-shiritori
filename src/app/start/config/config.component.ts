import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CardService, TimerService } from '../../shared/service';
import { ConfigForm } from './config-form';

/**
 * 各種設定コンポーネント
 */
@Component({
  selector: 'gsa-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  /** フォーム表示 */
  isOpen: boolean;

  /** 入力フォーム */
  form: FormGroup;

  /** 持ち時間オプション配列 */
  timeLimitMinuteOptions: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  /** 持ち時間オプション配列 */
  timeLimitSecondOptions: number[] = [];

  /** 数字オプション配列 */
  numbers: number[];

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService,
    private timerService: TimerService
  ) {
    this.form = this.formBuilder.group(ConfigForm.validators);
  }

  ngOnInit() {
    // フォーム初期値
    this.setForm();
    for (let n = 0; n <= 59; n++) {
      this.timeLimitSecondOptions.push(n);
    }
    this.numbers = this.cardService.numbers;
  }

  /**
   * フォーム初期値
   */
  setForm(): void {
    this.form.setValue({
      minNumber: this.cardService.minNumber,
      maxNumber: this.cardService.maxNumber,
      timeLimitMinute: Math.floor(this.timerService.timeLimit / 60),
      timeLimitSecond: this.timerService.timeLimit % 60,
    });
  }

  open(): void {
    // フォームを開く
    this.isOpen = true;
  }

  close(): void {
    // フォームを閉じる
    this.isOpen = false;
  }

  keyup($event): void {
    if ($event.key === 'Escape') {
      // フォームを閉じる
      this.close();
    }
  }

  /**
   * 登録ボタン
   * @param form 入力フォーム
   * @param isValid 有効か
   */
  onSubmit(form: ConfigForm, isValid: boolean): void {
    if (!isValid) {
      return;
    }
    this.cardService.minNumber = Number(form.minNumber);
    this.cardService.maxNumber = Number(form.maxNumber);

    // 持ち時間の分と秒を足す
    const timeLimit: number = Number(form.timeLimitMinute * 60) + Number(form.timeLimitSecond);
    if (timeLimit <= 0) {
      return;
    }
    this.timerService.timeLimit = timeLimit;

    // フォームを閉じる
    this.close();
  }

  /**
   * リセットボタン
   */
  reset(): void {
    this.cardService.reset();
    this.timerService.reset();
    this.setForm();
  }
}
