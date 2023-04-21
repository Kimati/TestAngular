import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestGoogleMapsComponent } from './test-google-maps.component';

describe('TestGoogleMapsComponent', () => {
  let component: TestGoogleMapsComponent;
  let fixture: ComponentFixture<TestGoogleMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestGoogleMapsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestGoogleMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
