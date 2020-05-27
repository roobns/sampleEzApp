import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BarscannerPageRoutingModule } from './barscanner-routing.module';

import { BarscannerPage } from './barscanner.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BarscannerPageRoutingModule
  ],
  declarations: [BarscannerPage]
})
export class BarscannerPageModule {}
