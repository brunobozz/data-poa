import { Component, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { faBus, faMapPin, faMap } from '@fortawesome/free-solid-svg-icons';
import { ApiDadosabertosService } from 'src/app/modules/api-dadosabertos/service/api-dadosabertos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-linhas',
  templateUrl: './linhas.component.html',
  styleUrls: ['./linhas.component.scss'],
  providers: [DecimalPipe]
})

export class LinhasComponent implements OnInit {

  LINHAS: any[] = [];
  linhaTipo: string

  faBus = faBus;
  faMapPin = faMapPin;
  faMap = faMap;

  linhas$: Observable<any[]>;
  filter = new FormControl('');

  constructor(
    private route: ActivatedRoute,
    private apiDacosAbertos: ApiDadosabertosService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe( parametros => {
      if (parametros['type']) {
        this.linhaTipo = parametros.type;
        if (this.linhaTipo === 'onibus'){
          this.getLinhas('o');
        }
        if (this.linhaTipo === 'lotacao'){
          this.getLinhas('l');
        }
      }
    });
  }

  getLinhas(type: string) {
    this.apiDacosAbertos.getLinhas(type).subscribe((data) => {
      this.LINHAS = data;
      this.linhas$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => this.search(text))
      );
    }, (err) => {
      console.log(err);
    });
  }

  search(text: string): any[] {
    return this.LINHAS.filter(linhas => {
      const term = text.toLowerCase();
      return linhas.nome.toLowerCase().includes(term)
        || linhas.codigo.includes(term)
    });
  }

  getMapa(id: string) {
    this.apiDacosAbertos.getItinerario(id).subscribe((data) => {
      let itinerario = Object.keys(data).map(i => data[i]);
      let cord = '';
      
      itinerario.forEach(function (value) {
        cord = cord + value.lat + ',' + value.lng + '/';
      }); 

      cord = cord + '@' + itinerario[10].lat + ',' + itinerario[10].lng;

      this.openInNewTab(cord);

    }, (err) => {
      console.log(err);
    });
  }

  openInNewTab(url: string) {
    window.open('https://www.google.com/maps/dir/' + url + ',13z/data=!3m1!4b1', '_blank');
  }

}