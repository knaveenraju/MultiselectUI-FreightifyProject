import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiselectLibComponent } from './multiselect-lib.component';

describe('MultiselectLibComponent', () => {
  let component: MultiselectLibComponent;
  let fixture: ComponentFixture<MultiselectLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultiselectLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiselectLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
