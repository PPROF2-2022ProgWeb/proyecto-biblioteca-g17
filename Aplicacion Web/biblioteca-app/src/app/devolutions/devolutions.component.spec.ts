import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevolutionsComponent } from './devolutions.component';

describe('DevolutionsComponent', () => {
  let component: DevolutionsComponent;
  let fixture: ComponentFixture<DevolutionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevolutionsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DevolutionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
