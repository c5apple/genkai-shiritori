import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StartComponent } from './start.component';
import { StartButtonComponent } from './start-button/start-button.component';
import { ConfigComponent } from './config/config.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  exports: [
    StartComponent
  ],
  declarations: [
    StartComponent,
    StartButtonComponent,
    ConfigComponent
  ]
})
export class StartModule { }
