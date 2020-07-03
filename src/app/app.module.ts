import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

// LIBRARIES
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

// COMPONENTS
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QuickAccessComponent } from './components/quick-access/quick-access.component';

// PAGES
import { LinhasComponent } from './pages/linhas/linhas.component';
import { ItinerariosComponent } from './pages/itinerarios/itinerarios.component';
import { HomeComponent } from './pages/home/home.component';
import { Er404Component } from './pages/er404/er404.component';

// SERVICES
import { ApiDadosabertosModule } from './modules/api-dadosabertos/api-dadosabertos.module';
import { ApiReverseModule } from './modules/api-reverse/api-reverse.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    SidebarComponent,
    LinhasComponent,
    HomeComponent,
    Er404Component,
    QuickAccessComponent,
    ItinerariosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApiDadosabertosModule,
    ApiReverseModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
