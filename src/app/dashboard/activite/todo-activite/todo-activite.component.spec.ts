import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoActiviteComponent } from './todo-activite.component';

describe('TodoActiviteComponent', () => {
  let component: TodoActiviteComponent;
  let fixture: ComponentFixture<TodoActiviteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoActiviteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoActiviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
