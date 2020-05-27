import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BatterystatusPageRoutingModule } from './batterystatus-routing.module';

import { BatterystatusPage } from './batterystatus.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BatterystatusPageRoutingModule
  ],
  declarations: [BatterystatusPage]
})
export class BatterystatusPageModule {}
