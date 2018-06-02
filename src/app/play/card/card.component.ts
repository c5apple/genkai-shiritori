import { Component, OnInit } from '@angular/core';
import { CardService, Card } from '../../shared/service';

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

}
