import { Component, OnInit } from '@angular/core';

import { PlayService } from '../../shared/service/play.service';

/**
 * スタートボタンコンポーネント
 */
@Component({
  selector: 'gsa-start-button',
  templateUrl: './start-button.component.html',
  styleUrls: ['./start-button.component.scss']
})
export class StartButtonComponent implements OnInit {

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  /**
   * スタートボタンクリック
   */
  public start() {
    this.playService.start();
  }
}
