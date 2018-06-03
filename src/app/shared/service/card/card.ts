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
  /** ジョーカー */
  joker = 0
}

/**
 * トランプマーク
 */
export class SuitStrEnum {
  /** スペード */
  public static spade = 's';
  /** ハート */
  public static heart = 'h';
  /** ダイアモンド */
  public static diamond = 'd';
  /** クラブ */
  public static club = 'c';
  /** ジョーカー */
  public static joker = 'x';

  public static text(suit: SuitEnum): string {
    switch (suit) {
      case SuitEnum.spade:
        return SuitStrEnum.spade;
      case SuitEnum.heart:
        return SuitStrEnum.heart;
      case SuitEnum.diamond:
        return SuitStrEnum.diamond;
      case SuitEnum.club:
        return SuitStrEnum.club;
      default:
        return SuitStrEnum.joker;
    }
  }
}
