import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CardService, Card, SuitEnum, SuitStrEnum } from '../../shared/service';

/**
 * カードコンポーネント
 */
@Component({
  selector: 'gsa-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  /** カードクラス */
  card: Card;
  cardBehavior: Subscription;

  /** アニメーション */
  animatedClass = '';

  constructor(private cardService: CardService) { }

  ngOnInit() {
    // カード変更検知
    this.cardBehavior = this.cardService.cardBehavior.subscribe(card => {
      this.card = card;
      this.animatedClass = '';
    });
  }

  ngOnDestroy(): void {
    this.card = null;
    this.cardBehavior.unsubscribe();
    this.cardService.setCard(null);
  }

  /**
   * トランプ画像パスを取得する
   */
  public getImgSrc(): string {
    if (!this.card) {
      return '';
    }
    return `https://cdn.banana-juice.com/games/img/trump/png/${SuitStrEnum.text(this.card.mark)}${('0' + this.card.num).slice(-2)}.png`;
  }

  /**
   * 画像ALTを取得する
   */
  public getImgAlt(): string {
    if (!this.card || this.card.num === 0) {
      return '';
    }
    switch (this.card.mark) {
      case SuitEnum.spade:
        return 'スペードの' + this.card.num;
      case SuitEnum.heart:
        return 'ハートの' + this.card.num;
      case SuitEnum.diamond:
        return 'ダイアの' + this.card.num;
      case SuitEnum.club:
        return 'クラブの' + this.card.num;
    }
    return '';
  }

  /**
   * 画像ロード時
   */
  public onLoadImage($event): void {
    this.animatedClass = 'animated flip';
  }
}
