import { Component } from '@angular/core';
import {QRCodeComponent} from "angularx-qrcode";


@Component({
  selector: 'app-qr-dialog',
    imports: [
        QRCodeComponent
    ],
  templateUrl: './qr-dialog.component.html',
  styleUrl: './qr-dialog.component.scss',
})
export class QrDialogComponent {

  public url(): string {
    let currentUrl = window.location.href;
    let lastIndex = currentUrl.lastIndexOf("/");

    return currentUrl.substring(0, lastIndex) + "/remote-control";
  }
}
