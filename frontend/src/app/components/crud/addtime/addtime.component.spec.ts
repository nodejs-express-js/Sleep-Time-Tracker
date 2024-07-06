import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtimeComponent } from './addtime.component';

describe('AddtimeComponent', () => {
  let component: AddtimeComponent;
  let fixture: ComponentFixture<AddtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddtimeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
