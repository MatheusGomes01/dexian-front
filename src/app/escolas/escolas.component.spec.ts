import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EscolasComponent } from './escolas.component';

describe('EscolasComponent', () => {
  let component: EscolasComponent;
  let fixture: ComponentFixture<EscolasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EscolasComponent]
    });
    fixture = TestBed.createComponent(EscolasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
