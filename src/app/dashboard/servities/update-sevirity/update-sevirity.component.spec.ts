import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSevirityComponent } from './update-sevirity.component';

describe('UpdateSevirityComponent', () => {
  let component: UpdateSevirityComponent;
  let fixture: ComponentFixture<UpdateSevirityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSevirityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSevirityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
