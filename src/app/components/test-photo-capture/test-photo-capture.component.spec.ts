import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestPhotoCaptureComponent } from './test-photo-capture.component';

describe('TestPhotoCaptureComponent', () => {
  let component: TestPhotoCaptureComponent;
  let fixture: ComponentFixture<TestPhotoCaptureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestPhotoCaptureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestPhotoCaptureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
