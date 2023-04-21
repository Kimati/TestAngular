import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserLanguagesService {

  users = new Array();

  constructor() { 
    this.users.push({name:"Ezra",userId:1,languages:["Java","Php","Javascript","Angular","Laravel"]})
    this.users.push({name:"Kimati",userId:2,languages:["C#","Go","Javascript","Ionic","Symphony"]})

  }

  //get user Languages
   getLanguages(userId:number):String[]{
    let langs = new Array();
    this.users.forEach((user)=>{
      if(user.userId == userId){
       langs = user.languages;
      }
    })
    return langs;
  }
}
