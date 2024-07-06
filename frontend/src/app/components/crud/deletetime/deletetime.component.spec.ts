import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletetimeComponent } from './deletetime.component';

describe('DeletetimeComponent', () => {
  let component: DeletetimeComponent;
  let fixture: ComponentFixture<DeletetimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeletetimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeletetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
