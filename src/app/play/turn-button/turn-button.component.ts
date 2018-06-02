import { Component, OnInit } from '@angular/core';
import { CardService } from '../../shared/service';

/**
 * 次へボタンコンポーネント
 */
@Component({
  selector: 'gsa-turn-button',
  templateUrl: './turn-button.component.html',
  styleUrls: ['./turn-button.component.scss']
})
export class TurnButtonComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  /**
   * 次へボタンクリック
   */
  public turn() {
    this.cardService.drowCard();
    this.cardService.discardCount = this.cardService.discardCount + 1;
  }
}
