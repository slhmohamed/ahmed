import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListServitieComponent } from './list-servitie.component';

describe('ListServitieComponent', () => {
  let component: ListServitieComponent;
  let fixture: ComponentFixture<ListServitieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListServitieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListServitieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
