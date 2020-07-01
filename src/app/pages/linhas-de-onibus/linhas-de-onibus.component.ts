import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { faBus, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { ApiDadosabertosService } from 'src/app/modules/api-dadosabertos/service/api-dadosabertos.service';

@Component({
  selector: 'app-linhas-de-onibus',
  templateUrl: './linhas-de-onibus.component.html',
  styleUrls: ['./linhas-de-onibus.component.scss'],
  providers: [DecimalPipe]
})

export class LinhasDeOnibusComponent implements OnInit {

  ONIBUS: any[] = [];

  faBus = faBus;
  faMapPin = faMapPin;

  onibus$: Observable<any[]>;
  filter = new FormControl('');

  constructor(
    private apiDacosAbertos: ApiDadosabertosService,
  ) { }

  ngOnInit() {
    this.getOnibus();
  }

  getOnibus() {
    this.apiDacosAbertos.getLinhasDeOnibus().subscribe((data) => {
      this.ONIBUS = data;
      this.onibus$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      );
    }, (err) => {
      console.log(err);
    });
  }

  search(text: string): any[] {
    return this.ONIBUS.filter(onibus => {
      const term = text.toLowerCase();
      return onibus.nome.toLowerCase().includes(term)
        || onibus.codigo.includes(term)
    });
  }

}