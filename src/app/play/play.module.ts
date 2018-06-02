import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { PassButtonComponent } from './pass-button/pass-button.component';
import { PlayComponent } from './play.component';
import { TimerComponent } from './timer/timer.component';
import { TrashComponent } from './trash/trash.component';
import { TurnButtonComponent } from './turn-button/turn-button.component';

import { CardService, TimerService } from '../shared/service';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    PlayComponent
  ],
  declarations: [
    CardComponent,
    PassButtonComponent,
    PlayComponent,
    TimerComponent,
    TrashComponent,
    TurnButtonComponent
  ],
  providers: [
    CardService,
    TimerService
  ]
})
export class PlayModule { }
