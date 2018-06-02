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

  constructor(private cardService: CardService) { }

  ngOnInit() {
  }

  /**
   * パスボタンクリック
   */
  public pass() {
    this.cardService.drowCard();
  }
}
