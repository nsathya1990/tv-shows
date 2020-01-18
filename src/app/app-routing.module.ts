import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RickAndMortyShowComponent } from './rick-and-morty-show/rick-and-morty-show.component';

const routes: Routes = [{
  path: 'rick-and-morty',
  component: RickAndMortyShowComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
