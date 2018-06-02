import { Component, OnInit } from '@angular/core';
import { CardService } from '../../shared/service';

/**
 * パスボタンコンポーネント
 */
@Component({
  selector: 'gsa-pass-button',
  templateUrl: './pass-button.component.html',
  styleUrls: ['./pass-button.component.scss']
})
export class PassButtonComponent implements OnInit {

  /** パスした回数 */
  passCount: number;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    // パス回数初期化
    this.passCount = 0;
  }

  /**
   * パスボタンクリック
   */
  public pass() {
    this.cardService.drowCard();
    this.passCount++;
  }
}
