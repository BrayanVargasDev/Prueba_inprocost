import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmpresasComponent } from './create-empresas.component';

describe('CreateEmpresasComponent', () => {
  let component: CreateEmpresasComponent;
  let fixture: ComponentFixture<CreateEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
