import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettaglioSDDComponent } from './dettaglio-sdd.component';

describe('DettaglioSDDComponent', () => {
  let component: DettaglioSDDComponent;
  let fixture: ComponentFixture<DettaglioSDDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettaglioSDDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettaglioSDDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
