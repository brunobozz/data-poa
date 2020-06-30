import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinhasDeOnibusComponent } from './linhas-de-onibus.component';

describe('LinhasDeOnibusComponent', () => {
  let component: LinhasDeOnibusComponent;
  let fixture: ComponentFixture<LinhasDeOnibusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinhasDeOnibusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinhasDeOnibusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
