import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-remove-token',
  templateUrl: './remove-token.component.html',
  styleUrls: ['./remove-token.component.css']
})
export class RemoveTokenComponent {
  id: string = '';

  constructor(private route: ActivatedRoute, private authService: AuthService, private toastr: ToastrService) {

    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    authService.getTokens(this.id).subscribe((data: any) => {
      /// if user dont have enough tokens to remove then redirect to home page
      if (data.tokens < 1) {
        window.location.href = '/';
        toastr.error('You dont have enough tokens to remove', 'Error');
      }
      else {
        authService.removeTokens(this.id, 1).subscribe((data: any) => {
          window.location.href = '/';
          toastr.success('You have successfully removed 1 token', 'Success');
        });
      }
    });
  }
}

