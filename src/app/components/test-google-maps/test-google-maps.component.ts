import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { googleMapsApiKey } from 'src/environments/environment';
import { roadsApiEndpoint } from 'src/environments/environment';
//import as '../../../environments/environment';
// import '@types/google.maps';
//import { google } from "google-maps";

@Component({
  selector: 'app-test-google-maps',
  templateUrl: './test-google-maps.component.html',
  styleUrls: ['./test-google-maps.component.scss']
})
export class TestGoogleMapsComponent implements OnInit {
 mapOptions:google.maps.MapOptions;
 sampleCoord = new Array();
 //aa:google.maps.geometry.

 directionsService = new google.maps.DirectionsService();
 directionRequest!:google.maps.DirectionsRequest;
 sampleFirstMarkerPos:any = {lat:-1.198848542045613,lng:36.87396347486188}; //Githurai 44
 sampleSecondMarkerPos:any = {lat:-1.3268077503358393,lng:36.87396347486188}; //Imara daima

 currentuserlocation:boolean = false;
 currentUserLocation = {lat:0,lng:0};


  constructor(private http:HttpClient) { 
    this.currentuserlocation = true;
    //nb. longitude => x-axis, latitude => y-axis
    this.sampleCoord.push({name:"garden city mall",long:36.8782713029769,lat:-1.221912368984167,pos:{lat:-1.221912368984167,lng:36.8782713029769}});
    this.sampleCoord.push({name:"buffalo pub wangige",long:36.712920987942354,lat:-1.2182989695224158, pos:{lat:-1.2182989695224158,lng:36.712920987942354}});
    
  this.mapOptions = {center:{lat: 40, lng: -20},zoom:0};
   //alert(this.distanceBetweenTwoPoints(this.sampleCoord[0].pos,this.sampleCoord[1].pos));
  }

  ngOnInit(): void {
    this.testDirectionsService();
  }

  //Return the shortest path btn two points (in Meters)
  //In real transportation scenarion consider capturing distances based on the passages like ROADS.
  distanceBetweenTwoPoints(pointA:any,pointB:any):number{
    return google.maps.geometry.spherical.computeDistanceBetween(pointA, pointB);
  }
 

  //Test the Directions API.
  //Hit the DirectionsService service
  testDirectionsService(){
    let origin = new google.maps.LatLng(-1.221912368984167,36.8782713029769);
    let destination = new google.maps.LatLng(-1.2182989695224158,36.712920987942354);
    let directionRequest = {
      origin: origin,
      destination:destination,
      travelMode: google.maps.TravelMode.DRIVING,
      drivingOptions: {
        departureTime: new Date(Date.now()),
        trafficModel: google.maps.TrafficModel.OPTIMISTIC
      },
      // unitSystem: UnitSystem,
      // optimizeWaypoints: Boolean,
      // provideRouteAlternatives: Boolean,
      // avoidFerries: Boolean,
      // avoidHighways: Boolean,
      // avoidTolls: Boolean,
      region: "Kenya"
    }
    this.directionRequest = directionRequest;

    this.directionsService.route(this.directionRequest,(dirResults:google.maps.DirectionsResult|null,dirStatus:google.maps.DirectionsStatus)=>{
      console.log("Req result Routes are: " + JSON.stringify(dirResults?.routes[0].legs[0]))
    }).then((res:any)=>{
       console.log(res);
    });
  }

  //
  processOperation(operation:string){
    switch(operation){
      case "currentuserlocation":
        // alert("Zyler")
        this.currentuserlocation = true;
        //this.getCurrentUserLocation();
        break;
      case "roadsbtnpoints":
        this.getRoadsBtnPoints().subscribe((roads)=>{
           console.log("Roads btn 2 points are: " + JSON.stringify(roads));
        });
        break;
      case "distancebtnpoints":
        this.getDistanceBtnPoints();
        break;
      case "sketchpathbtnpoints":
        this.sketchPathBtnPoints();
        break;

      default:
        alert("WTF");
        break;
      
    }

  }

  //Get current user Location
  getCurrentUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.getCurrentPosition((success)=>{
        let obj = success;
        console.log("Current location is: " + success.coords.latitude);

         this.currentUserLocation.lat = success.coords.latitude;
         this.currentUserLocation.lng = success.coords.longitude;
        //console.log("Current location is: " + JSON.stringify({arr:success}));
        this.currentuserlocation = true;
        this.updateMarkerPosition(this.currentUserLocation);
      }, (error)=>{
        this.currentuserlocation = false;
        console.log("Error getting current user location >>>> Exact error:" + JSON.stringify(error));
      })

      // navigator.geolocation.getCurrentPosition(this.showPosition);
    }
    else{
      this.currentuserlocation = false;
      alert("Geolocation is not supported");
    }
  }

  //get all roads btn 2 points
  getRoadsBtnPoints():Observable<any>{
    let requestParams = `points=${this.sampleFirstMarkerPos.lat},${this.sampleFirstMarkerPos.lng}|${this.sampleSecondMarkerPos.lat},${this.sampleSecondMarkerPos.lng}`;
    let requestFullUrl = roadsApiEndpoint + requestParams + `&key=${googleMapsApiKey}`;
    
    return this.http.get(requestFullUrl);
  }

  getDistanceBtnPoints(){

  }

  sketchPathBtnPoints(){

  }

  showPosition(pos:any){
    console.log("Current location is: " + JSON.stringify(pos));
  }

  //Track user location and update the marker on the map
  trackUserLocation(){
    if(navigator.geolocation){
      navigator.geolocation.watchPosition((success)=>{
        this.currentuserlocation = true;
        this.updateMarkerPosition(success)
    },(error)=>{
      
    })
  }
}

//updater marker position on map
updateMarkerPosition(positionCoords:any){
  let latLng = positionCoords;
  this.sampleFirstMarkerPos = latLng;
}

}
