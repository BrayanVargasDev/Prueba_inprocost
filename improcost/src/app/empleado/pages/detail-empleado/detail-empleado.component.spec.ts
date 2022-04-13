import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailEmpleadoComponent } from './detail-empleado.component';

describe('DetailEmpleadoComponent', () => {
  let component: DetailEmpleadoComponent;
  let fixture: ComponentFixture<DetailEmpleadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailEmpleadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailEmpleadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
