import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpresasComponent } from './detail-empresas.component';

describe('DetailEmpresasComponent', () => {
  let component: DetailEmpresasComponent;
  let fixture: ComponentFixture<DetailEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
