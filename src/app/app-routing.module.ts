import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//PAGES
import { HomeComponent } from './pages/home/home.component';
import { LinhasDeOnibusComponent } from './pages/linhas-de-onibus/linhas-de-onibus.component';
import { LinhasDeLotacaoComponent } from './pages/linhas-de-lotacao/linhas-de-lotacao.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'linhas-de-onibus', component: LinhasDeOnibusComponent },
  { path: 'linhas-de-lotacao', component: LinhasDeLotacaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
