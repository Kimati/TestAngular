import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  //Mock a service
  let mockUserService = jasmine.createSpyObj<UsersService>(["computeSalary"])
  //let testrouter = jasmine.createSpyObj<Router>([""]);

  //Fake response
  let fakeApiResponse = {
    data:[{id:1,name:"Ezra Kimati"}]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      // imports: [FormsModule],
      declarations: [HomeComponent],
      providers:[{
        provide:UsersService,
        useValue:mockUserService
      }],
     // schemas: [], //When including child components
    });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.debugElement.componentInstance;
  });

  it('process test argument must be string', () => {
    //Arrange
     let action = component.targetAction;

    //act
    let actionString = false;
    if(typeof action === 'string'){
      actionString = true;
    }

    //assert
    expect(actionString).toBe(true);
  });

  //get response from a fake response
  // it('Should get response from a fake API', ()=>{
  //   mockUserService.computeSalary.and.returnValue(of(fakeApiResponse));
  //   fixture.detectChanges();
  //   expect(fixture.componentInstance.allUsers).toEqual(1);
  // })

});
