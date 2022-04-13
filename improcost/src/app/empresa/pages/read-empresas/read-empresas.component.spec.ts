import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadEmpresasComponent } from './read-empresas.component';

describe('ReadEmpresasComponent', () => {
  let component: ReadEmpresasComponent;
  let fixture: ComponentFixture<ReadEmpresasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadEmpresasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadEmpresasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
