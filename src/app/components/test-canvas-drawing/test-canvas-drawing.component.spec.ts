import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestCanvasDrawingComponent } from './test-canvas-drawing.component';

describe('TestCanvasDrawingComponent', () => {
  let component: TestCanvasDrawingComponent;
  let fixture: ComponentFixture<TestCanvasDrawingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestCanvasDrawingComponent ]
    })
    // .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCanvasDrawingComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('detection sectors must not be null',()=>{
    //assert
    expect(component.detectionSectors.length).toBeGreaterThanOrEqual(1);
  })
});
