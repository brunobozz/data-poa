import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

// PAGES
import { LinhasDeOnibusComponent } from './pages/linhas-de-onibus/linhas-de-onibus.component';
import { LinhasDeLotacaoComponent } from './pages/linhas-de-lotacao/linhas-de-lotacao.component';
import { HomeComponent } from './pages/home/home.component';
import { Er404Component } from './pages/er404/er404.component';

// SERVICES
import { ApiDadosabertosModule } from './modules/api-dadosabertos/api-dadosabertos.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    LinhasDeOnibusComponent,
    LinhasDeLotacaoComponent,
    HomeComponent,
    Er404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiDadosabertosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
