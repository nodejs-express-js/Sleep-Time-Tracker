import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowviewComponent } from './showview.component';

describe('ShowviewComponent', () => {
  let component: ShowviewComponent;
  let fixture: ComponentFixture<ShowviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
