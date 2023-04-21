import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestLiveswitchSdkComponent } from './test-liveswitch-sdk.component';

describe('TestLiveswitchSdkComponent', () => {
  let component: TestLiveswitchSdkComponent;
  let fixture: ComponentFixture<TestLiveswitchSdkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestLiveswitchSdkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestLiveswitchSdkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
