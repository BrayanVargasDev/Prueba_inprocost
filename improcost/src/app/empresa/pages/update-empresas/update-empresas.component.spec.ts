import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEmpresasComponent } from './update-empresas.component';

describe('UpdateEmpresasComponent', () => {
  let component: UpdateEmpresasComponent;
  let fixture: ComponentFixture<UpdateEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
