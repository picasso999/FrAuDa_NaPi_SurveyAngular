import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireAuthModule } from '@angular/fire/auth';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireModule} from 'angularfire2';
import { AngularFirestore } from 'angularfire2/firestore';
// Firebase services + enviorment module
// import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
// App components
import { AppComponent } from './app.component';
// App routing modules
// import { AppRoutingModule1 } from './Auth_1/shared/routing/app-routing.module';
import { AuthGuard } from './Auth_1/shared/guard/auth.guard';
// Auth service
import { AuthService } from './Auth_1/shared/services/auth.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import { DashboardComponent } from './Auth_1/components/dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { ForgotPasswordComponent } from './Auth_1/components/forgot-password/forgot-password.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import { NavbarComponent } from './navbar/navbar.component';
import { NgModule } from '@angular/core';
// Reactive Form
import { ReactiveFormsModule } from '@angular/forms';
import {RouterModule} from '@angular/router';
import { SecureInnerPagesGuard } from './Auth_1/shared/guard/secure-inner-pages.guard';
import { SignInComponent } from './Auth_1/components/sign-in/sign-in.component';
import { SignUpComponent } from './Auth_1/components/sign-up/sign-up.component';
import { SurveyChartComponent } from './survey-chart/survey-chart.component';
import { SurveyClientComponent } from './survey-client/survey-client.component';
import { SurveyManagerComponent } from './survey-manager/survey-manager.component';
import { VerifyEmailComponent } from './Auth_1/components/verify-email/verify-email.component';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    SurveyManagerComponent,
    SurveyClientComponent,
    SurveyChartComponent,
    NavbarComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    DashboardComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    MatMenuModule,
    MatButtonModule,
    MatListModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCheckboxModule,
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    // AppRoutingModule1,
    AngularFireAuthModule,
    AngularFirestoreModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: '', component: SurveyClientComponent, pathMatch: 'full'},
      {path: 'admin', component: SurveyManagerComponent, canActivate: [AuthGuard]},
      {path: 'charts', component: SurveyChartComponent, canActivate: [AuthGuard]},
      { path: 'sign-in', component: SignInComponent},
  { path: 'register-user', component: SignUpComponent, canActivate: [SecureInnerPagesGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'forgot-password', component: ForgotPasswordComponent, canActivate: [SecureInnerPagesGuard] },
  { path: 'verify-email-address', component: VerifyEmailComponent, canActivate: [SecureInnerPagesGuard] }
    ])
  ],
  providers: [AuthService, AngularFirestore, AngularFireAuth ],
  bootstrap: [AppComponent]
})
export class AppModule { }
