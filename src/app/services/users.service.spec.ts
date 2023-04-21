import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { UserLanguagesService } from './user-languages.service';
import { UsersService } from './users.service';

//Test suite using TestBed  #When a Service has dependency.
describe('UsersService',()=>{
  let userService:UsersService;
  
  //let languageServiceSpy:jasmine.SpyObj<UserLanguagesService>;
  let languageServiceObj:UserLanguagesService = new UserLanguagesService();
  let languageServiceSpy:any;
  let stubValue = new Array();
  let client:any;


  beforeEach(()=>{
    //creat spies for each injected services
    languageServiceSpy = {
      getLanguages:jest.fn(),
      getUsers:jest.fn()
    }

    client = {
      get:jest.fn(),
      post:jest.fn()
    }
   
   TestBed.configureTestingModule({providers:[
    UsersService,
    {provide:HttpClient,useValue:client},
    {provide:UserLanguagesService,useValue:languageServiceSpy}
   ]})
  
   //inject both the service to test and its dependency (spy)
   userService = TestBed.inject(UsersService);
   client = TestBed.inject(HttpClient);
   languageServiceObj = TestBed.inject(UserLanguagesService);
  })

  //test cases
  test('get user salary: Returning a Promise',()=>{
    //arrange
     let userAge = 10;
     let salaryUnit = 1000;

     //assert
     userService.computeSalary(userAge,salaryUnit).then((resolve:any)=>{
      expect(resolve).toBeGreaterThan(salaryUnit);
      //done();
     })
    
  })

  //get user languages
  test('get user languages: When UsersService has a dependency.Test must pass.',()=>{
    expect(userService.getUserLanguages(1).length).toBeGreaterThan(stubValue.length); //
   })

   test('get users',()=>{
      let usersSpy = [{
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
      }]; //end of object mock
    
      //create a spy for a service's method
      jest.spyOn(client,'get').mockReturnValue(of(usersSpy));

      //trigger the service method call
      userService.getUsers('users');
      expect(userService.allUsers.length).toBeGreaterThan(1);
     
   }) //end of test
 

   //afterEach
   afterAll(()=>{
    
   })

})
