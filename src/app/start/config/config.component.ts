import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CardService } from '../../shared/service';
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

  constructor(
    private formBuilder: FormBuilder,
    private cardService: CardService
  ) {
    this.form = this.formBuilder.group(ConfigForm.validators);
  }

  ngOnInit() {
    // フォーム初期値
    this.form.setValue({
      minNumber: this.cardService.minNumber,
      maxNumber: this.cardService.maxNumber,
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
  onSubmit(form: ConfigForm, isValid: boolean) {
    if (!isValid) {
      return;
    }
    this.cardService.minNumber = Number(form.minNumber);
    this.cardService.maxNumber = Number(form.maxNumber);

    // フォームを閉じる
    this.close();
  }
}
