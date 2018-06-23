import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

/**
 * タイマーサービス
 */
@Injectable()
export class TimerService {

  /** 持ち時間 */
  private _timeLimit = 900;  // 15分

  constructor() { }

  /**
   * 持ち時間を取得する
   */
  get timeLimit(): number {
    return this._timeLimit;
  }

  /**
   * 持ち時間を設定する
   */
  set timeLimit(number: number) {
    this._timeLimit = number;
  }

  public getTimer() {
    // 1秒間隔で経過秒数を返す
    return Observable.interval(1000).map(i => i).share();
  }
}
