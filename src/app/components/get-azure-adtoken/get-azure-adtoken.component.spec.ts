import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAzureADTokenComponent } from './get-azure-adtoken.component';

describe('GetAzureADTokenComponent', () => {
  let component: GetAzureADTokenComponent;
  let fixture: ComponentFixture<GetAzureADTokenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAzureADTokenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAzureADTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
