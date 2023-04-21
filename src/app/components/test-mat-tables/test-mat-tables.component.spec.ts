import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestMatTablesComponent } from './test-mat-tables.component';

describe('TestMatTablesComponent', () => {
  let component: TestMatTablesComponent;
  let fixture: ComponentFixture<TestMatTablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestMatTablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestMatTablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
