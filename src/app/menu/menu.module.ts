import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuPage,
    children: [
      {
        path: 'home',
        loadChildren: '../home/home.module#HomePageModule'
      },
      {
        path: 'geolocation',
        loadChildren: '../geolocation/geolocation.module#GeolocationPageModule'
      },
      {
        path: 'barscanner',
        loadChildren: '../barscanner/barscanner.module#BarscannerPageModule'
      },
      {
        path: 'batterystatus',
        loadChildren: '../batterystatus/batterystatus.module#BatterystatusPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/menu/home'
  }
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MenuPage]
})

export class MenuPageModule { }