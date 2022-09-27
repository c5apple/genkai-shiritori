import { Component, OnInit, OnDestroy } from '@angular/core';
import { CardService } from '../../shared/service';
import { Subscription } from 'rxjs';

/**
 * 捨て札コンポーネント
 */
@Component({
  selector: 'gsa-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit, OnDestroy {

  /** 捨て札枚数 */
  discardCount = 0;
  discardCountBehavior?: Subscription;

  constructor(private cardService: CardService) { }

  ngOnInit() {
    // 捨て札変更検知
    this.discardCountBehavior = this.cardService.discardCountBehavior.subscribe(count => {
      if (count > 1) {
        this.discardCount = count - 1;
      }
    });
  }

  ngOnDestroy(): void {
    this.discardCount = 0;
    this.discardCountBehavior?.unsubscribe();
    this.cardService.discardCount = 0;
  }

}
