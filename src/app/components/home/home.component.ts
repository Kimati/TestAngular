import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { BrowserDetectionService } from 'src/app/services/browser-detection.service';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  targetAction:string = '';
  allUsers:Observable<any[]> = new Observable<any[]>();
  userBrowserInfor = {};
 
  // constructor(private router:Router) { }
  constructor(private router:Router,private user:UsersService,private browserDetection:BrowserDetectionService) { }
  
  ngOnInit(): void {
  }

  processTest(test:string){
    this.targetAction = test;
    switch(test){
     case 'directives':
        this.router.navigate(['directives']);
      break;

      case 'login':
        this.router.navigate(['login']);
        break;
      
        case 'fileupload':
          this.router.navigate(['fileupload']);
          break;

        case 'canvasdrawing':
          this.router.navigate(['canvasdrawing']);
          break;
        
        case 'googlemaps':
            this.router.navigate(['googlemaps']);
            break;

        case 'imagmagnifier':
              this.router.navigate(['imagmagnifier']);
              break;
        
        case 'componentunittests':
            this.router.navigate(['componentunittests']);
            break;
            
        case 'browserdetection':
              //this.router.navigate(['browserdetection']);
              console.log("Browser infor is>>> " + JSON.stringify(this.browserDetection.getDeviceInfo()));         
            break;

          default:{

          }
    }
  }

}
