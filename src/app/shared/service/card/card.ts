/**
 * カードクラス
 */
export class Card {

  /**
   * カードクラス
   * @param number 数字
   * @param mark マーク
   */
  constructor(public number: number, public mark: SuitEnum) { }
}

/**
 * トランプマーク
 */
export enum SuitEnum {
  /** スペード */
  spade = 1,
  /** ハート */
  heart = 2,
  /** ダイアモンド */
  diamond = 3,
  /** クラブ */
  club = 4,
}
