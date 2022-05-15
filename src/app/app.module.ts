import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Firebase related
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { environment } from '../environments/environment';

// Components & Services
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaskComponent } from './dashboard/task/task.component';
import { AuthService } from './auth/auth.service';
import { BackendNetworkService } from './backend-network.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    AuthComponent,
    DashboardComponent,
    TaskComponent,
  ],
  providers: [BackendNetworkService, AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
