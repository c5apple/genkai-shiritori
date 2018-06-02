import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayModule } from './play/play.module';
import { StartModule } from './start/start.module';

import { PlayService } from './shared/service/play.service';
import { TimerService } from './shared/service/timer.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayModule,
    StartModule
  ],
  providers: [PlayService, TimerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
