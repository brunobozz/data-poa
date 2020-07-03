import { Component, OnInit } from '@angular/core';
import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { ApiDadosabertosService } from 'src/app/modules/api-dadosabertos/service/api-dadosabertos.service';
import { ApiReverseService } from 'src/app/modules/api-reverse/service/api-reverse.service';

@Component({
  selector: 'app-itinerarios',
  templateUrl: './itinerarios.component.html',
  styleUrls: ['./itinerarios.component.scss']
})
export class ItinerariosComponent implements OnInit {

  faMapPin = faMapPin
  id: string
  linhaCodigo: string
  linhaNome: string
  itinerario = [];

  constructor(
    private route: ActivatedRoute,
    private apiReverse: ApiReverseService,
    private apiDacosAbertos: ApiDadosabertosService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(parametros => {
      if (parametros['id']) {
        this.id = parametros.id
        this.getItinerario();
      } else {
        // errorpage
      }
    });
  }

  getItinerario() {
    this.apiDacosAbertos.getItinerario(this.id).subscribe((data) => {
      this.linhaCodigo = data.codigo;
      this.linhaNome = data.nome;

      this.itinerario = Object.values(data).filter(value => value.hasOwnProperty("lat"));
    }, (err) => {
      console.log(err);
    });
  }

}
