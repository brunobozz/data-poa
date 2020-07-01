import { Component, OnInit } from '@angular/core';
import { ApiDadosabertosService } from 'src/app/modules/api-dadosabertos/service/api-dadosabertos.service';

@Component({
  selector: 'app-linhas-de-onibus',
  templateUrl: './linhas-de-onibus.component.html',
  styleUrls: ['./linhas-de-onibus.component.scss']
})
export class LinhasDeOnibusComponent implements OnInit {

  public linhasDeOnibus: any[] = [];
  public searchTerm: string

  constructor(
    private apiDacosAbertos: ApiDadosabertosService
  ) { }

  ngOnInit() {
    this.getOnibus(this.searchTerm)
  }

  getOnibus(nome: string) {
    this.apiDacosAbertos.getLinhasDeOnibus(nome).subscribe((data) => {
      this.linhasDeOnibus = data;
      console.log(this.linhasDeOnibus);
    }, (err) => {
      console.log(err);
    });
  }

  searchNome(term: string) {
    console.log(term)
    this.getOnibus(term)
  }

}
