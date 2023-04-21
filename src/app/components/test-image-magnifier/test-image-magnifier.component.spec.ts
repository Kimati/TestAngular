import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestImageMagnifierComponent } from './test-image-magnifier.component';

describe('TestImageMagnifierComponent', () => {
  let component: TestImageMagnifierComponent;
  let fixture: ComponentFixture<TestImageMagnifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestImageMagnifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestImageMagnifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
