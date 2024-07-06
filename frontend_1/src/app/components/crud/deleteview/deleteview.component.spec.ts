import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteviewComponent } from './deleteview.component';

describe('DeleteviewComponent', () => {
  let component: DeleteviewComponent;
  let fixture: ComponentFixture<DeleteviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
