import { Injectable } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

/**
 * タイマーサービス
 */
@Injectable()
export class TimerService {

  constructor() { }

  public getTimer() {
    // 1秒間隔で経過秒数を返す
    return Observable.interval(1000).map(i => i).share();
  }
}
