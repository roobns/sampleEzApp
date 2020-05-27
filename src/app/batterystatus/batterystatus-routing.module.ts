import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BatterystatusPage } from './batterystatus.page';

const routes: Routes = [
  {
    path: '',
    component: BatterystatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BatterystatusPageRoutingModule {}
