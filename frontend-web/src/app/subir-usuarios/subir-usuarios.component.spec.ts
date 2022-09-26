import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirUsuariosComponent } from './subir-usuarios.component';

describe('SubirUsuariosComponent', () => {
  let component: SubirUsuariosComponent;
  let fixture: ComponentFixture<SubirUsuariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirUsuariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
