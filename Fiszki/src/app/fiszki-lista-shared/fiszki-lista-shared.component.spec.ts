import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiszkiListaSharedComponent } from './fiszki-lista-shared.component';

describe('FiszkiListaSharedComponent', () => {
  let component: FiszkiListaSharedComponent;
  let fixture: ComponentFixture<FiszkiListaSharedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiszkiListaSharedComponent]
    });
    fixture = TestBed.createComponent(FiszkiListaSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
