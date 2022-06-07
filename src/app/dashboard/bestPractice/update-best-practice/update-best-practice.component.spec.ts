import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBestPracticeComponent } from './update-best-practice.component';

describe('UpdateBestPracticeComponent', () => {
  let component: UpdateBestPracticeComponent;
  let fixture: ComponentFixture<UpdateBestPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateBestPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
