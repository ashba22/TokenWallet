import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-payqrcode',
  templateUrl: './payqrcode.component.html',
  styleUrls: ['./payqrcode.component.css']
})
export class PayqrcodeComponent {

    
    userId = sessionStorage.getItem('username');

    randomString = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 5);
    
    qrString = this.userId + '/' + this.randomString; 
  
    constructor(
      private dialogRef: MatDialogRef<PayqrcodeComponent>
    ) { }
  
    closeDialog(): void {
      this.dialogRef.close();
    }

}
