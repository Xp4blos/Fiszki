import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiszkiListaSharedElementComponent } from './fiszki-lista-shared-element.component';

describe('FiszkiListaSharedElementComponent', () => {
  let component: FiszkiListaSharedElementComponent;
  let fixture: ComponentFixture<FiszkiListaSharedElementComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FiszkiListaSharedElementComponent]
    });
    fixture = TestBed.createComponent(FiszkiListaSharedElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
