import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//SERVICES
import { ApiDadosabertosService } from './service/api-dadosabertos.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiDadosabertosService
  ]
})
export class ApiDadosabertosModule { }
