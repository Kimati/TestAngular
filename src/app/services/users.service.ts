import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';
import { UserLanguagesService } from './user-languages.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  testBool:boolean = true;
  userAge = 25;
  salaryUnit:number = 2000;
  allUsers = new Array();
  usersObservable:Observable<any> = new Observable<any>();
  sampleUser:User = {
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
  };

  constructor(private http:HttpClient,private userLanguages:UserLanguagesService) { }

  //user salary
  computeSalary(age:number,salUnit:number):Promise<any>{
    let pr = new Promise<any>((resolve,reject)=>{
      resolve((age * salUnit) + 1);
    })
    return pr;
  }

  getUserInfor(userId:number):User{
    //Can be an api call here.....
    return this.sampleUser;
  }

  setTestUserAge(age:number){
    this.userAge = age;
  }
 
  //fnx returning an observable
  getSalaryUnit():Observable<any>{
     let salUnit = of(this.salaryUnit);
     return salUnit;
  }

  //returns an array of user languages
   getUserLanguages(userId:number):String[]{
     return this.userLanguages.getLanguages(userId);
  }


  getUsers(operation:string):Observable<any>{
    let baseUrl = "https://jsonplaceholder.typicode.com/"
    this.usersObservable = this.http.get(baseUrl+operation);
    this.usersObservable.subscribe((users)=>{
      this.allUsers = users;
    })
    return this.usersObservable;
  }

  testfnxCall(){

  }

}
