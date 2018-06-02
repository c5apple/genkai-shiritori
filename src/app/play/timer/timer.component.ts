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
  timeLimit: number = 15; // 15分

  /** 残り時間 */
  time: number = 0;

  /** タイマー */
  timer: Subscription;
  // timer: Observable<number>;

  /** 停止中か */
  isStoped: boolean;

  constructor(private timerService: TimerService) { }

  ngOnInit() {
    // 持ち時間設定
    this.time = this.timeLimit;

    this.start();
  }

  /**
   * タイマー開始
   */
  public start() {
    this.timer = this.timerService.getTimer().subscribe(time => this.time--);
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
