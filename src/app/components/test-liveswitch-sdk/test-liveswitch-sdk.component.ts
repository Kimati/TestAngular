import { Component, OnInit } from '@angular/core';
import liveSwitchSdk from 'fm.liveswitch';
import { LiveswitchConfig } from 'src/app/models/liveswitch.config';
//import { LiveswitchConfig } from ''

@Component({
  selector: 'app-test-liveswitch-sdk',
  templateUrl: './test-liveswitch-sdk.component.html',
  styleUrls: ['./test-liveswitch-sdk.component.scss']
})
export class TestLiveswitchSdkComponent implements OnInit {
  
  localMedia:liveSwitchSdk.LocalMedia | null = null;
  config:LiveswitchConfig = new LiveswitchConfig();
  client:liveSwitchSdk.Client | null = null;
  //The list of all the channels we are currently.
  channels: liveSwitchSdk.Channel[] | null = null; 
  authToken:string = "";


  constructor() { }

  ngOnInit(): void {
    //Create an instance of LocalMedia.
    this.localMediaContext();
  }

  //start local media context
  async localMediaContext(){
    try{
    this.localMedia = new liveSwitchSdk.LocalMedia(false,{
      video:{
        width: {
          ideal: 640,
          max: 1920
        },
        height: {
          ideal: 480,
          max: 1080
        }
      }
    });

    //enable screen sharing
    await this.localMedia.start();
  }
  catch(error){
    console.log("Unable to start the local media context!");
  }
  }

  //create client and sign them up for signaling. This will connect the user to the Liveswitch gateway
  async configureClient(){
    try{
    this.config.gatewayUrl = "";
    this.config.applicationId = "";
    this.config.sharedSecret = "";
    this.config.deviceId = "zyleronliveswitch";
    this.config.userId = liveSwitchSdk.Guid.newGuid().toString();

    this.client = new liveSwitchSdk.Client(this.config.gatewayUrl,this.config.applicationId,this.config.userId,this.config.deviceId);
    

    //configure channel claims
    let primaryChannel = new liveSwitchSdk.ChannelClaim("myChannelId");
    primaryChannel.setDisableSendVideo(false);
    primaryChannel.setDisableSendAudio(false);
    let channelClaims: liveSwitchSdk.ChannelClaim[] = [primaryChannel];
    
    // 2d.create a token (WARNING: THIS ALWAYS SHOULD BE DONE SERVER SIDE. CLIENT SIDE ONLY FOR THE DEMO!)
    this.authToken = liveSwitchSdk.Token.generateClientRegisterToken(this.client, channelClaims, this.config.sharedSecret);
    
    //register the client to the signalling server using our new token
    this.channels = await this.client.register(this.authToken);
      if (this.channels === null) {
        throw new Error("Client register did not join any channels, you must join a channel to continue.");
      }
    }
    catch(clientGenException){
      console.log("Error ctreating client: " + JSON.stringify(clientGenException))
    }
  }
}
