import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { UserComponent } from './userlist/userlist.component';
import { FooterComponent } from './footer/footer.component';
import { BuytokensComponent } from './buytokens/buytokens.component';
import { QRCodeModule } from 'angularx-qrcode';
import { PayqrcodeComponent } from './payqrcode/payqrcode.component';
import { RemoveTokenComponent } from './remove-token/remove-token.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    UserComponent,
    FooterComponent,
    BuytokensComponent,
    PayqrcodeComponent,
    RemoveTokenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    QRCodeModule,
    // TODO Enviorment configurieren und ServiceWorker aktivieren nur im Prod Modus
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: true, registrationStrategy: 'registerImmediately' }),


  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
