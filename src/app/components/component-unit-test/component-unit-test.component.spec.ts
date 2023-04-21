import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/compiler';
import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
} from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { createSpyFromClass, Spy } from 'jest-auto-spies';
import { of } from 'rxjs';
import { DirectiveUnitTestDirective } from 'src/app/directives/directive-unit-test.directive';
import { ToUpperCasePipe } from 'src/app/pipes/to-upper-case.pipe';
import { UsersService } from 'src/app/services/users.service';
import { ComponentUnitTestComponent } from './component-unit-test.component';

describe('ComponentUnitTestComponent', () => {
  let component: ComponentUnitTestComponent;
  let fixture: ComponentFixture<ComponentUnitTestComponent>;
  let h2: HTMLElement;
  let userService:UsersService;
 // let userServiceSpy:Spy<UsersService> = createSpyFromClass(UsersService);
 let userServiceSpy:any;
  let usersMock = {
      userAge: 20,
      sampleUser: {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      },
    };

  beforeEach(async () => {
    userServiceSpy = [
      {
        "id": 1,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz",
        "address": {
          "street": "Kulas Light",
          "suite": "Apt. 556",
          "city": "Gwenborough",
          "zipcode": "92998-3874",
          "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
          }
        },
        "phone": "1-770-736-8031 x56442",
        "website": "hildegard.org",
        "company": {
          "name": "Romaguera-Crona",
          "catchPhrase": "Multi-layered client-server neural-net",
          "bs": "harness real-time e-markets"
        }
      }
    ]
    await TestBed.configureTestingModule({
      declarations: [DirectiveUnitTestDirective, ComponentUnitTestComponent,ToUpperCasePipe],
      providers: [
        { provide: ComponentFixtureAutoDetect, useValue: true },
        { provide: UsersService, useValue: userServiceSpy },
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
    
    //refresh the component
    userService = TestBed.inject(UsersService); //get the injected service
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentUnitTestComponent);
    component = fixture.componentInstance;
    h2 = fixture.nativeElement.querySelector('.first_header');
    fixture.detectChanges(); //Without this, data binding will not happen not unless you configure automatic change detection provided by ComponentFixtureAutoDetect 
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });

  //test if h2 has been binded
  test('component binding: h2 should display the original title', () => {
    expect(h2.textContent).toContain(component.title);
    //expect(h2.textContent).toContain(component.counterPartTitle);
  });

  test('Expect returned user age from the mock and not from the real service', () => {
    let minUserAge = 18;
    expect(component.getUserAge()).toEqual(20);
    
  });

  test('Test directive: H2 title must be green in color', () => {
    // fixture = TestBed.createComponent(ComponentUnitTestComponent);
    // component = fixture.componentInstance;
    // h2 = fixture.nativeElement.querySelector('h2')
    expect(h2.style.color).toBe('green');
  });

  test('get users from service: using the dummy object instead of the real service response',() => {
    let val = userServiceSpy.getUsers.mockReturnValue(of(usersMock));
    expect(component.users.length).toBeGreaterThan(1);
    // expect(component.users.length).toBe(0);
    expect(component.getAllUsers).toHaveBeenCalled();
    expect(userService.getUsers).toHaveBeenCalled();
  })
});
