import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PlayModule } from './play/play.module';
import { StartModule } from './start/start.module';
import { MyAdsenseModule } from './shared/component/my-adsense/my-adsense.module';

import { PlayService } from './shared/service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    PlayModule,
    StartModule,
    MyAdsenseModule
  ],
  providers: [PlayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
