import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateActionComponent } from './update-action.component';

describe('UpdateActionComponent', () => {
  let component: UpdateActionComponent;
  let fixture: ComponentFixture<UpdateActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
