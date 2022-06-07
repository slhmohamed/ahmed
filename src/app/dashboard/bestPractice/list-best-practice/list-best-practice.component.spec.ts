import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBestPracticeComponent } from './list-best-practice.component';

describe('ListBestPracticeComponent', () => {
  let component: ListBestPracticeComponent;
  let fixture: ComponentFixture<ListBestPracticeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBestPracticeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBestPracticeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
