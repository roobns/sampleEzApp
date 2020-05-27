import { Component, OnInit } from '@angular/core';
import {
  BarcodeScannerOptions,
  BarcodeScanner
} from "@ionic-native/barcode-scanner/ngx";

@Component({
  selector: 'app-barscanner',
  templateUrl: './barscanner.page.html',
  styleUrls: ['./barscanner.page.scss'],
})
export class BarscannerPage{

  encodedData: any;
  scannedData: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private barcodeScanner: BarcodeScanner) {
    this.encodedData = "https://www.google.com";
    //Options
    this.barcodeScannerOptions = {
      showTorchButton: true,
      showFlipCameraButton: true
    };
  }

  scanCode() {
    this.barcodeScanner
      .scan()
      .then(barcodeData => {
        alert("Barcode data " + JSON.stringify(barcodeData));
        this.scannedData = barcodeData;
      })
      .catch(err => {
        console.log("Error", err);
      });
  }

  generateBar() {
    this.barcodeScanner
      .encode(this.barcodeScanner.Encode.TEXT_TYPE, this.encodedData)
      .then(
        encodedData => {
          console.log(encodedData);
          this.encodedData = encodedData;
        },
        err => {
          console.log("Error occured : " + err);
        }
      );
  }
}
