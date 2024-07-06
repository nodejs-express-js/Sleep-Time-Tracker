import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewtimesComponent } from './viewtimes.component';

describe('ViewtimesComponent', () => {
  let component: ViewtimesComponent;
  let fixture: ComponentFixture<ViewtimesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewtimesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewtimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
