import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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
    return `./assets/img/trump/gif/${SuitStrEnum.text(this.card.mark)}${('0' + this.card.number).slice(-2)}.gif`;
  }

  /**
   * 画像ALTを取得する
   */
  public getImgAlt(): string {
    if (!this.card || this.card.number === 0) {
      return '';
    }
    switch (this.card.mark) {
      case SuitEnum.spade:
        return 'スペードの' + this.card.number;
      case SuitEnum.heart:
        return 'ハートの' + this.card.number;
      case SuitEnum.diamond:
        return 'ダイアの' + this.card.number;
      case SuitEnum.club:
        return 'クラブの' + this.card.number;
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
