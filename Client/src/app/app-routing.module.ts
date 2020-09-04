import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatComponent } from './components/chat/chat.component'
import { SelectUserComponent } from './components/select-user/select-user.component'
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ForgetPassComponent } from './forget-pass/forget-pass.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContectUsComponent } from './contect-us/contect-us.component';
import { ConfomPassComponent } from './confom-pass/confom-pass.component';

const routes: Routes = [ 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'username', component: SelectUserComponent },
  { path: 'forgetpass', component:  ForgetPassComponent },
  { path: 'chat', component: ChatComponent  },
  { path: 'comformpass', component: ConfomPassComponent  },
  { path: 'contactus', component: ContectUsComponent },
  {path: 'login', component: LoginComponent},
   {path: 'home' , component: HomeComponent , 
   children: [
    // { path: '', component: SelectUserComponent },
    { path: 'chat-window', component: ChatComponent },
   
  ],},
  {path: 'register', component : RegistrationComponent },
 
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
