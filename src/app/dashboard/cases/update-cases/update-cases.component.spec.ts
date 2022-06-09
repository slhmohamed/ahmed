import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCasesComponent } from './update-cases.component';

describe('UpdateCasesComponent', () => {
  let component: UpdateCasesComponent;
  let fixture: ComponentFixture<UpdateCasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateCasesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
