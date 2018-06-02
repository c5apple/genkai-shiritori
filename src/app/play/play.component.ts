import { Component, OnInit } from '@angular/core';
import { CardService } from '../shared/service';

/**
 * プレイ画面
 */
@Component({
  selector: 'gsa-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  constructor(private cardService: CardService) { }

  ngOnInit() {
    // 山札初期化
    this.cardService.shuffle();
  }

}
