import { Component, OnInit } from '@angular/core';
import { faBus } from '@fortawesome/free-solid-svg-icons';
import { ApiDadosabertosService } from 'src/app/modules/api-dadosabertos/service/api-dadosabertos.service';

@Component({
  selector: 'app-linhas-de-lotacao',
  templateUrl: './linhas-de-lotacao.component.html',
  styleUrls: ['./linhas-de-lotacao.component.scss']
})
export class LinhasDeLotacaoComponent implements OnInit {

  faBus  = faBus;

  public linhasDeLotacao: any[] = [];
  public searchTerm: string

  constructor(
    private apiDacosAbertos: ApiDadosabertosService
  ) { }

  ngOnInit() {
    this.getLotacao(this.searchTerm)
  }

  getLotacao(nome: string) {
    this.apiDacosAbertos.getLinhasDeLotacao().subscribe((data) => {
      this.linhasDeLotacao = data;
      console.log(this.linhasDeLotacao);
    }, (err) => {
      console.log(err);
    });
  }

  searchNome(term: string) {
    console.log(term)
    this.getLotacao(term)
  }

}
