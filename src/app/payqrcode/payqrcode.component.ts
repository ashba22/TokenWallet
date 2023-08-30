import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { SharedTokenService } from '../service/shared-token.service';

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
    ) {}

    closeDialog(): void {
      this.dialogRef.close();
    }

    onSubmit(): void {
      this.authService.getTokens(this.userId).subscribe({
        next: balance => {
          if (balance < 1) {
            this.toastr.error('You dont have enough tokens to pay', 'Error');
          }
          else {
            this.authService.removeTokens(this.userId, balance - 1).subscribe({
              next: () => {
                this.dialogRef.close();
                const tokenAmount = balance - 1;
                this.toastr.success('You have successfully paid 1 token', 'Success');
              },
              error: error => this.toastr.error(`Error: ${error.message}`, 'Error')
            });
          }
        },

        error: error => this.toastr.error(`Error: ${error.message}`, 'Error')
      });
    }
  }

  
