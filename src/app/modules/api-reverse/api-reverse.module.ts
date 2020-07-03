import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//SERVICES
import { ApiReverseService } from './service/api-reverse.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[
    ApiReverseService
  ]
})
export class ApiReverseModule { }
