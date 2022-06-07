import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddServitiesComponent } from './add-servities.component';

describe('AddServitiesComponent', () => {
  let component: AddServitiesComponent;
  let fixture: ComponentFixture<AddServitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddServitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddServitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
