import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Card, SuitEnum } from './card';

/**
 * カードサービス
 */
@Injectable()
export class CardService {

  /** 最小数字 */
  private _minNumber: number = 2;

  /** 最大数字 */
  private _maxNumber: number = 11;

  /** 山札 */
  private _deck: Card[] = [];

  /** カード変更検知 */
  public cardBehavior = new BehaviorSubject<Card>(null);

  constructor() {
  }

  /**
   * 最小数字を取得する
   */
  get minNumber(): number {
    return this._minNumber;
  }

  /**
   * 最小数字を取得する
   */
  set minNumber(number: number) {
    this._minNumber = number;
  }

  /**
   * 最大数字を取得する
   */
  get maxNumber(): number {
    return this._maxNumber;
  }

  /**
   * 最大数字を取得する
   */
  set maxNumber(number: number) {
    this._maxNumber = number;
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
    const deck = [];
    for (let i = this._minNumber; i < this._maxNumber; i++) {
      deck.push(new Card(i, SuitEnum.spade));
      deck.push(new Card(i, SuitEnum.heart));
      deck.push(new Card(i, SuitEnum.diamond));
      deck.push(new Card(i, SuitEnum.club));
    }
    let n = deck.length, t, i;
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
  public drowCard(): Card {
    const card = this._deck.shift();
    this.cardBehavior.next(card);
    return card;
  }

  /**
   * カードセット
   */
  public setCard(card: Card): void {
    this.cardBehavior.next(card);
  }
}
