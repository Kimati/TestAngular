import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTestComponenetComponent } from './unit-test-componenet.component';

describe('UnitTestComponenetComponent', () => {
  let component: UnitTestComponenetComponent;
  let fixture: ComponentFixture<UnitTestComponenetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitTestComponenetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTestComponenetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
