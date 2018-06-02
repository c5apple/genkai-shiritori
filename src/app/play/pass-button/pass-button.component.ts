import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Card, CardService } from '../../shared/service';

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

  /** カード */
  card: Card;
  cardBehavior: Subscription;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    // パス回数初期化
    this.passCount = 0;

    // カード変更検知
    this.cardBehavior = this.cardService.cardBehavior.subscribe(card => {
      this.card = card;
    });
  }

  /**
   * パスボタンクリック
   */
  public pass() {
    this.cardService.drowCard();
    this.passCount++;
  }
}
