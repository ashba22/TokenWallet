  import { Component, Inject } from '@angular/core';
  import { FormBuilder, FormGroup, Validators } from '@angular/forms';
  import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
  import { AuthService } from '../service/auth.service';
  import { ToastrService } from 'ngx-toastr';

  @Component({
    selector: 'app-buytokens',
    templateUrl: './buytokens.component.html',
    styleUrls: ['./buytokens.component.css']
  })
  export class BuytokensComponent {

    buyForm: FormGroup;

    constructor(
      private formBuilder: FormBuilder,
      protected authService: AuthService,
      private toastr: ToastrService,
      private dialogRef: MatDialogRef<BuytokensComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {
      this.buyForm = this.formBuilder.group({
        tokenAmount: ['', [Validators.required, Validators.pattern(/^[0-9]+$/)]],
        paymentMethod: ['', Validators.required],
        isAgreed: [false, Validators.requiredTrue]
      });
    }

    onSubmit(): void {
      if (this.buyForm.valid && this.buyForm.dirty) {
        const { tokenAmount } = this.buyForm.value;
        const userId = sessionStorage.getItem('username');
        const tokenBalance$ = this.authService.getTokens(userId);
        tokenBalance$.subscribe(balance => {
          const newBalance = balance + Number(tokenAmount);
          const addTokens$ = this.authService.addTokens(userId, newBalance);
          addTokens$.subscribe(() => {
            this.dialogRef.close();
            this.toastr.success(`You have successfully bought ${tokenAmount} tokens`, 'Success');

          });
        });
      }
    }

    onCancel() {
      this.dialogRef.close()
    }
  }
