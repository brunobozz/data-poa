import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { faBus, faMapPin } from '@fortawesome/free-solid-svg-icons';
import { ApiDadosabertosService } from 'src/app/modules/api-dadosabertos/service/api-dadosabertos.service';

@Component({
  selector: 'app-linhas-de-lotacao',
  templateUrl: './linhas-de-lotacao.component.html',
  styleUrls: ['./linhas-de-lotacao.component.scss'],
  providers: [DecimalPipe]
})

export class LinhasDeLotacaoComponent implements OnInit {

  LOTACAO: any[] = [];

  faBus = faBus;
  faMapPin = faMapPin;

  lotacao$: Observable<any[]>;
  filter = new FormControl('');

  constructor(
    private apiDacosAbertos: ApiDadosabertosService,
  ) { }

  ngOnInit() {
    this.getLotacao();
  }

  getLotacao() {
    this.apiDacosAbertos.getLinhasDeLotacao().subscribe((data) => {
      this.LOTACAO = data;
      this.lotacao$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      );
    }, (err) => {
      console.log(err);
    });
  }

  search(text: string): any[] {
    return this.LOTACAO.filter(lotacao => {
      const term = text.toLowerCase();
      return lotacao.nome.toLowerCase().includes(term)
        || lotacao.codigo.includes(term)
    });
  }

}