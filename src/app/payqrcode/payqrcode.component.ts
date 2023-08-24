import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SharedTokenService } from '../service/shared-token.service';
import { Route } from '@angular/router';
@Component({
  selector: 'app-payqrcode',
  templateUrl: './payqrcode.component.html',
  styleUrls: ['./payqrcode.component.css']
})
export class PayqrcodeComponent {

    userId = sessionStorage.getItem('username');

    randomString = Math.random().toString(36).substring(2, 8) + Math.random().toString(36).substring(2, 5);
    
    qrString = this.userId + '/' + this.randomString; 

    tokens$!: number;
  
    constructor(
      private dialogRef: MatDialogRef<PayqrcodeComponent>,
      private authService: AuthService,
      private toastr: ToastrService,
      private sharedTokenService: SharedTokenService
    ) {
      this
     }
  
    closeDialog(): void {
      this.dialogRef.close();
    }
    onSubmit(): void {
      this.authService.removeTokens(this.userId, 1).subscribe((data: any) => {
        if (data) {
          this.toastr.success('You have successfully paid 1 token', 'Success');
          this.closeDialog();
        } else {
          this.toastr.error('You dont have enough tokens to pay', 'Error');
        }

          
        

      
      });
    }
  }
