import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @ViewChild('navbarNav') navbarNav!: ElementRef;
  @ViewChild('navbarToggler') navbarToggler!: ElementRef;

  constructor(private authService: AuthService, private router: Router) {}

  closeMenu(): void {
    if (this.navbarNav.nativeElement.classList.contains('show')) {
      this.navbarToggler.nativeElement.click();
    }
  }

  logOut(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.closeMenu();
    this.router.navigate(['/login']);
  }
  isLoggedIn(): boolean {
    return this.authService.isLoggedIN();
  }
  isAdmin(): boolean {
    return this.authService.isAdmin();
  }
  
}
