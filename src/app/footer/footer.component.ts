
  import { Component } from '@angular/core';
  import { AuthService } from '../service/auth.service';
  import { MatDialog } from '@angular/material/dialog';
  import { ToastrService } from 'ngx-toastr';
  import { PayqrcodeComponent } from '../payqrcode/payqrcode.component';

  @Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
  })
  export class FooterComponent {
    username = localStorage.getItem('username');

    constructor(
      public service: AuthService,
      public dialog: MatDialog,
      private toastr: ToastrService
    ) {}

    // Open the pay QR code dialog
    openDialog(): void {
      const dialogRef = this.dialog.open(PayqrcodeComponent, {
        width: '400px',
        data: { username: this.username } // Pass any data required by the dialog
      });

      // Handle the dialog result
      dialogRef.afterClosed().subscribe(result => {
        console.log('Dialog closed:', result);

        // Update the tokens variable in the home component
        const homeComponent = this.dialog.getDialogById('homeComponent');
        if (homeComponent) {
          homeComponent.componentInstance.tokens = this.service.getTokens(this.username);
        }
      });
    }


    payClick(): void {
      if (this.dialog.openDialogs.length > 0) {
        this.toastr.warning('Close current QR code before generating a new one.');
      } else {
        this.openDialog();
      }
    }

 
    isLoggedIn(): boolean {
      return this.service.isLoggedIN();
    }
  }

