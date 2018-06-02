import { Component, OnInit } from '@angular/core';
import { CardService, Card, SuitStrEnum } from '../../shared/service';

/**
 * カードコンポーネント
 */
@Component({
  selector: 'gsa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /** カードクラス */
  card: Card;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    // カード変更検知
    this.cardService.cardBehavior.subscribe(card => {
      this.card = card;
    });
  }

  /**
   * トランプ画像パスを取得する
   */
  public getImgSrc(): string {
    if (!this.card) {
      return '';
    }
    return `/assets/img/trump/gif/${SuitStrEnum.text(this.card.mark)}${('0' + this.card.number).slice(-2)}.gif`;
  }
}
