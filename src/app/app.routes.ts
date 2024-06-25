import { Routes } from '@angular/router';
import { HomeComponent } from './Home/home.component';
import { AboutComponent } from './about/about.component';
import { PlanesComponent } from './planes/planes.component';

export const routes: Routes = [
  {path:'Inicio', component: HomeComponent},
  {path:'About', component: AboutComponent},
  {path:'Planes', component: PlanesComponent},
  {path: '**', component: HomeComponent},

];
