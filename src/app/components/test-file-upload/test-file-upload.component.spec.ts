import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestFileUploadComponent } from './test-file-upload.component';

describe('TestFileUploadComponent', () => {
  let component: TestFileUploadComponent;
  let fixture: ComponentFixture<TestFileUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestFileUploadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFileUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
