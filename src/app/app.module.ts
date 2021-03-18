import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AfterLoginComponent } from './after-login/after-login.component';
import { RequestTimeOffComponent } from './request-time-off/request-time-off.component';
import { ShiftsToCoverComponent } from './shifts-to-cover/shifts-to-cover.component';
import { PostAShiftComponent } from './post-a-shift/post-a-shift.component';
import { TimeApprovedDeniedComponent } from './time-approved-denied/time-approved-denied.component';

import { HomePageComponent } from './home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
// import { ServicesComponent } from './services/services.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RegisterComponent } from './register';

@NgModule({
  declarations: [
    AppComponent,
    AfterLoginComponent,
    RequestTimeOffComponent,
    ShiftsToCoverComponent,
    PostAShiftComponent,
    TimeApprovedDeniedComponent,
    // AppRouting.Module.TsComponent,
    HomePageComponent,
    // ServicesComponent
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
