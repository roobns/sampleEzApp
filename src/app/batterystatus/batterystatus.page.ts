import { Component, OnInit } from '@angular/core';
import { BatteryStatus } from '@ionic-native/battery-status/ngx';


@Component({
  selector: 'app-batterystatus',
  templateUrl: './batterystatus.page.html',
  styleUrls: ['./batterystatus.page.scss'],
})
export class BatterystatusPage implements OnInit {

  batterySubscription : any;
  public nivelBat: number;
  public enchufeBat: boolean;



  constructor(
    private batteryStatus: BatteryStatus
  ) {

  }
  ngOnInit() {
    this.checkBattery();
  }

  
  checkBattery(){
    this.batterySubscription = this.batteryStatus.onChange().subscribe(status => {
      this.nivelBat = status.level;
      this.enchufeBat = status.isPlugged;
      console.log(this.nivelBat, this.enchufeBat);
    });
  }

  stopBatteryCheck(){
    this.batterySubscription.unsubscribe();
  }


}
