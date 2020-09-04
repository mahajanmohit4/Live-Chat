import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectUserComponent } from './components/select-user/select-user.component';
import { ChatComponent } from './components/chat/chat.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { ConfomPassComponent } from './confom-pass/confom-pass.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectUserComponent,
    ChatComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPassComponent,
    HomeComponent,
    PageNotFoundComponent,
    ContectUsComponent,
    ConfomPassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
