import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { RickAndMortyShowComponent } from './rick-and-morty-show/rick-and-morty-show.component';
import { UnderConstructionComponent } from './under-construction/under-construction.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full', },
  { path: 'home', component: HomeComponent },
  { path: 'rick-and-morty', component: RickAndMortyShowComponent },
  { path: 'under-construction', component: UnderConstructionComponent },
  { path: '**', redirectTo: '/home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
