import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioDistintaComponent } from './dettaglio-distinta.component';

describe('DettaglioDistintaComponent', () => {
  let component: DettaglioDistintaComponent;
  let fixture: ComponentFixture<DettaglioDistintaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioDistintaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioDistintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
