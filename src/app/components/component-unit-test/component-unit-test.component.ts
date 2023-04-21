import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UsersService } from 'src/app/services/users.service';
//import { User } from '../../models/user.model';

@Component({
  selector: 'app-component-unit-test',
  templateUrl: './component-unit-test.component.html',
  styleUrls: ['./component-unit-test.component.scss']
})
export class ComponentUnitTestComponent implements OnInit {
 title:string = '';
 userId:number = 36112007;
 counterPartTitle:string = '';
 loggedInUser:User = {
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
 users:User[] = new Array();

  constructor(private userService:UsersService) { 
    this.title = "component unit testing";
  }

  ngOnInit(): void {
    this.loggedInUser = this.userService.getUserInfor(this.userId);
    this.userService.setTestUserAge(20);
  }

  getUserAge():number{
    return this.userService.userAge; //25
  }
  
  getAllUsers(){
   let operation = "users";
   this.userService.getUsers(operation).subscribe((users)=>{
    this.users = users;
    console.log("Users>>> " + JSON.stringify(this.users));
   })
  }

}
