import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubirLibrosComponent } from './subir-libros.component';

describe('SubirLibrosComponent', () => {
  let component: SubirLibrosComponent;
  let fixture: ComponentFixture<SubirLibrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubirLibrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubirLibrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
