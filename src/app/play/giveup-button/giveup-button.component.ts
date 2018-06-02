import { Component, OnInit } from '@angular/core';
import { PlayService } from '../../shared/service';

/**
 * ギブアップボタンコンポーネント
 */
@Component({
  selector: 'gsa-giveup-button',
  templateUrl: './giveup-button.component.html',
  styleUrls: ['./giveup-button.component.scss']
})
export class GiveupButtonComponent implements OnInit {

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  /**
   * ギブアップボタンクリック
   */
  public giveup(): void {
    this.playService.end();
  }
}
