import { Routes } from '@angular/router';
import { LoginComponent } from './admin/login/login.component';
import { SignupComponent } from './admin/signup/signup.component';
import { CourseDetailsComponent } from './admin/course-details/course-details.component';
import { WelcomeComponent } from './guests/welcome/welcome.component';
import { CourseListComponent } from './guests/course-list/course-list.component';
import { NotFoundComponent } from './not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: '/guests/welcome', pathMatch: 'full' },
  { path: 'admin', children: [
    { path: 'login', component: LoginComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'course-details', component: CourseDetailsComponent }
  ]},
  { path: 'guests', children: [
    { path: 'welcome', component: WelcomeComponent },
    { path: 'course-list', component: CourseListComponent }
  ]},
  { path: '**', component: NotFoundComponent }
];

