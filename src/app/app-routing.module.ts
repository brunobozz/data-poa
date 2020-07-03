import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//PAGES
import { HomeComponent } from './pages/home/home.component';
import { LinhasComponent } from './pages/linhas/linhas.component';
import { ItinerariosComponent } from './pages/itinerarios/itinerarios.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'linhas/:type', component: LinhasComponent },
  { path: 'itinerarios/:id', component: ItinerariosComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
