import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { TimerService } from '../../shared/service/timer.service';

/**
 * タイマーコンポーネント
 */
@Component({
  selector: 'gsa-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {

  /** 持ち時間 */
  timeLimit: number = 900; // 15分

  /** 残り時間 */
  time: number = 0;

  /** タイマー */
  timer: Subscription;

  /** 停止中か */
  isStoped: boolean;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    // 持ち時間設定
    this.time = this.timeLimit;

    this.start();
  }

  /**
   * 残り時間表記
   */
  get timeStr(): string {
    const h = this.time / 3600 | 0;
    const m = this.time % 3600 / 60 | 0;
    const s = this.time % 60 | 0;

    if (h !== 0) {
      return h + "時間" + `0${m}`.slice(-2) + "分" + `0${s}`.slice(-2) + "秒";
    } else if (m !== 0) {
      return m + "分" + `0${s}`.slice(-2) + "秒";
    } else {
      return s + "秒";
    }
  }

  /**
   * タイマー開始
   */
  public start() {
    this.timer = this.timerService.getTimer().subscribe(time => {
      // カウントダウン
      this.time--;

      // 終了
      if (this.time === 0) {
        this.stop();
      }
    });
  }

  /**
   * タイマー終了
   */
  public stop() {
    this.timer.unsubscribe();
  }

  /**
   * タイマー開始/終了
   */
  public toggle() {
    if (this.isStoped) {
      this.start();
    } else {
      this.stop();
    }
    this.isStoped = !this.isStoped;
  }
}
