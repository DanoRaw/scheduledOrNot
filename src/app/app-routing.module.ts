import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AfterLoginComponent } from './after-login/after-login.component';
import { PostAShiftComponent } from './post-a-shift/post-a-shift.component';
import { RequestTimeOffComponent } from './request-time-off/request-time-off.component';
import { ShiftsToCoverComponent } from './shifts-to-cover/shifts-to-cover.component';
import { TimeApprovedDeniedComponent } from './time-approved-denied/time-approved-denied.component';
import { HomePageComponent } from './home-page/home-page.component';

const appRoutes: Routes= [
    {path:'', redirectTo: '/home-page', pathMatch: 'full'},
    {path:'home-page', component: HomePageComponent},
    {path: 'after-login', component: AfterLoginComponent},
    {path: 'post-a-shift', component: PostAShiftComponent},
    {path: 'request-time-off', component: RequestTimeOffComponent},
    {path: 'shifts-to-cover', component: ShiftsToCoverComponent},
    {path: 'time-approved-denied', component: TimeApprovedDeniedComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}