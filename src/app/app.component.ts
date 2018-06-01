import { Component, OnInit } from '@angular/core';

import { PlayService } from './shared/service/play.service';

/**
 * アプリコンポーネント
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private playService: PlayService) { }

  /** 開始状態 */
  private isStarted = false;

  ngOnInit() {
    // 開始状態検知
    this.playService.isStart.subscribe(ret => {
      this.isStarted = Boolean(ret);
    });
  }
}
