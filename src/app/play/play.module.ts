import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { CardComponent } from './card/card.component';
import { GiveupButtonComponent } from './giveup-button/giveup-button.component';
import { PassButtonComponent } from './pass-button/pass-button.component';
import { PlayComponent } from './play.component';
import { TimerComponent } from './timer/timer.component';
import { TrashComponent } from './trash/trash.component';
import { TurnButtonComponent } from './turn-button/turn-button.component';

import { CardService, TimerService } from '../shared/service';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    PlayComponent
  ],
  declarations: [
    CardComponent,
    GiveupButtonComponent,
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
