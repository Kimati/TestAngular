import { Injectable } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';


@Injectable({
  providedIn: 'root'
})

export class BrowserDetectionService {
  deviceInfo!:any;

  constructor(private deviceDetector:DeviceDetectorService) { 

  }

  getDeviceInfo(){
    let devPlatform = "";
    if(this.deviceDetector.isDesktop())
    {
      devPlatform = "desktop";
    }
    else if(this.deviceDetector.isMobile()){
      devPlatform = "mobile";
    }
    else if(this.deviceDetector.isTablet()){
      devPlatform = "tablet";
    }
    else{
      devPlatform = "unknown";
    }
        

    this.deviceInfo = {
      browserName:this.deviceDetector.browser,
      browserVersion:this.deviceDetector.browser_version,
      device:this.deviceDetector.device,
      os:this.deviceDetector.os,
      osVersion:this.deviceDetector.os_version,
      browserAgent:this.deviceDetector.userAgent,
      devicePlatform:devPlatform
    }

    return this.deviceInfo;
  }
}
