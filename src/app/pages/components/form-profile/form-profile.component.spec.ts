import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormProfileComponent } from './form-profile.component';

describe('FormProfileComponent', () => {
  let component: FormProfileComponent;
  let fixture: ComponentFixture<FormProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
