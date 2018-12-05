import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PlayModule } from './play/play.module';
import { StartModule } from './start/start.module';
import { MyAdsenseModule } from './shared/component/my-adsense/my-adsense.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayModule,
    StartModule,
    MyAdsenseModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
