import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ObjectComponent } from './object/object.component';
import { AboutComponent } from './about/about.component';
import { canDeactivateRoute } from './route-guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'object',
    component: ObjectComponent,
    canDeactivate: [canDeactivateRoute],
  },
  { path: 'about', component: AboutComponent },
];
