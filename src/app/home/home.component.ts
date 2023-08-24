import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from "../service/auth.service";
import { BuytokensComponent } from "../buytokens/buytokens.component";
import { ToastrService } from 'ngx-toastr'
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  username = sessionStorage.getItem('username');
  tokens!: number;
  tokenAmount!: number;
  paymentMethod!: string;
  isAgreed!: boolean;

  constructor(private service: AuthService, private dialog: MatDialog, private toastr: ToastrService) { 
    this.service.getTokens(this.username)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.tokens = data;
        }
      );
  }

  openBuyTokensDialog(): void {
    const dialogRef = this.dialog.open(BuytokensComponent, {
      width: '400px',
      data: { username: this.username } 
    });

    dialogRef.afterClosed().subscribe(() => {
      this.service.getTokens(this.username)
      .subscribe(
        (data: any) => {
          console.log(data);
          this.tokens = data;
        }
      );
    });
  }
}
