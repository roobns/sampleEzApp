import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BarscannerPage } from './barscanner.page';

const routes: Routes = [
  {
    path: '',
    component: BarscannerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BarscannerPageRoutingModule {}
