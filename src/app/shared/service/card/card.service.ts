import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Card, SuitEnum } from './card';

/**
 * カードサービス
 */
@Injectable()
export class CardService {
  /** 最小数字 */
  private _minNumber = 2;

  /** 最大数字 */
  private _maxNumber = 11;

  /** 山札 */
  private _deck: Card[] = [];

  /** カード変更検知 */
  public cardBehavior = new BehaviorSubject<Card | undefined>(undefined);

  /** 捨て札枚数 */
  private _discardCount = 0;

  /** 捨て札変更検知 */
  public discardCountBehavior = new BehaviorSubject<number>(0);

  /** 数字配列 */
  public numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  constructor() {
    // ローカルストレージから値を取得
    const minNumber = Number(localStorage.getItem('minNumber'));
    if (minNumber > 0) {
      this._minNumber = minNumber;
    }
    const maxNumber = Number(localStorage.getItem('maxNumber'));
    if (maxNumber > 0) {
      this._maxNumber = maxNumber;
    }
  }

  /**
   * 最小数字を取得する
   */
  get minNumber(): number {
    return this._minNumber;
  }

  /**
   * 最小数字を設定する
   */
  set minNumber(num: number) {
    this._minNumber = num;
    localStorage.setItem('minNumber', this._minNumber.toString());
  }

  /**
   * 最大数字を取得する
   */
  get maxNumber(): number {
    return this._maxNumber;
  }

  /**
   * 最大数字を設定する
   */
  set maxNumber(num: number) {
    this._maxNumber = num;
    localStorage.setItem('maxNumber', this._maxNumber.toString());
  }

  /**
   * 山札を取得する
   */
  get deck(): Card[] {
    return this._deck;
  }

  /**
   * 山札をセットする
   */
  public shuffle(): void {
    const deck: Card[] = [];
    for (let num = this._minNumber; num <= this._maxNumber; num++) {
      if (num === 0) {
        // ジョーカー
        deck.push(new Card(1, SuitEnum.joker));
        continue;
      } else if (num === 1) {
        // 1はスキップ
        continue;
      }
      deck.push(new Card(num, SuitEnum.spade));
      deck.push(new Card(num, SuitEnum.heart));
      deck.push(new Card(num, SuitEnum.diamond));
      deck.push(new Card(num, SuitEnum.club));
    }
    let n = deck.length;
    let t: Card;
    let i: number;
    while (n) {
      i = Math.floor(Math.random() * n--);
      t = deck[n];
      deck[n] = deck[i];
      deck[i] = t;
    }
    this._deck = deck;
  }

  /**
   * カードを一枚引く
   */
  public drowCard(): Card | undefined {
    const card = this._deck.shift();
    this.cardBehavior.next(card);
    return card;
  }

  /**
   * カードセット
   */
  public setCard(card: Card | undefined): void {
    this.cardBehavior.next(card);
  }

  /**
   * 捨て札枚数を取得する
   */
  get discardCount(): number {
    return this._discardCount;
  }

  /**
   * 捨て札枚数を設定する
   */
  set discardCount(num: number) {
    this._discardCount = num;
    this.discardCountBehavior.next(num);
  }

  /**
   * 初期値に戻す
   */
  public reset(): void {
    localStorage.removeItem('minNumber');
    localStorage.removeItem('maxNumber');
    this._minNumber = 2;
    this._maxNumber = 11;
  }
}
