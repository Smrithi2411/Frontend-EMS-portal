import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateEmpComponent } from './create-update-emp.component';

describe('CreateUpdateEmpComponent', () => {
  let component: CreateUpdateEmpComponent;
  let fixture: ComponentFixture<CreateUpdateEmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateEmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUpdateEmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
