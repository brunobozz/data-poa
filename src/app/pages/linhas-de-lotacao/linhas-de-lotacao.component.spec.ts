import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasDeLotacaoComponent } from './linhas-de-lotacao.component';

describe('LinhasDeLotacaoComponent', () => {
  let component: LinhasDeLotacaoComponent;
  let fixture: ComponentFixture<LinhasDeLotacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasDeLotacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasDeLotacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
