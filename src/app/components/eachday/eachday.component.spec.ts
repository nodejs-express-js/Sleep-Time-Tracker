import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EachdayComponent } from './eachday.component';

describe('EachdayComponent', () => {
  let component: EachdayComponent;
  let fixture: ComponentFixture<EachdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EachdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EachdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
