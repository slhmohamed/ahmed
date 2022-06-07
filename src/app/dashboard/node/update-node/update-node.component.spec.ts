import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNodeComponent } from './update-node.component';

describe('UpdateNodeComponent', () => {
  let component: UpdateNodeComponent;
  let fixture: ComponentFixture<UpdateNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateNodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
