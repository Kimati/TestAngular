import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestMatTablesComponent } from './components/test-mat-tables/test-mat-tables.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { HomeComponent } from './components/home/home.component';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { ChangeColorDirective } from './directives/change-color.directive';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import { GetAzureADTokenComponent } from './components/get-azure-adtoken/get-azure-adtoken.component';
//import { MsalModule } from '@azure/msal-angular';
import { PublicClientApplication } from '@azure/msal-browser';
//import { MsalModule } from '@azure/msal-angular/msal.module';
//import { MsalModule } from '@azure/msal-angular';
import { MsalModule } from '@azure/msal-angular';
import { TestFileUploadComponent } from './components/test-file-upload/test-file-upload.component';
import {MatIconModule} from '@angular/material/icon';
import { TestCanvasDrawingComponent } from './components/test-canvas-drawing/test-canvas-drawing.component';
import { TestPhotoCaptureComponent } from './components/test-photo-capture/test-photo-capture.component';
import { TestGoogleMapsComponent } from './components/test-google-maps/test-google-maps.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { CanvasWhiteboardModule, CanvasWhiteboardShapeService } from 'ng2-canvas-whiteboard';
import { TestImageMagnifierComponent } from './components/test-image-magnifier/test-image-magnifier.component';
import { ImgMagnifier } from "ng-img-magnifier";
import { TestLiveswitchSdkComponent } from './components/test-liveswitch-sdk/test-liveswitch-sdk.component';
//import { WebUnitTestingPrototypeComponent } from './components/web-unit-testing-prototype/web-unit-testing-prototype.component';
import { UnitTestComponenetComponent } from './components/unit-test-componenet/unit-test-componenet.component';
import { ComponentUnitTestComponent } from './components/component-unit-test/component-unit-test.component';
import { DirectiveUnitTestDirective } from './directives/directive-unit-test.directive';
import { ToUpperCasePipe } from './pipes/to-upper-case.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TestMatTablesComponent,
    HomeComponent,
    TestDirectivesComponent,
    ChangeColorDirective,
    GetAzureADTokenComponent,
    TestFileUploadComponent,
    TestCanvasDrawingComponent,
    TestPhotoCaptureComponent,
    TestGoogleMapsComponent,
    TestImageMagnifierComponent,
    TestLiveswitchSdkComponent,
    //WebUnitTestingPrototypeComponent,
    UnitTestComponenetComponent,
    ComponentUnitTestComponent,
    DirectiveUnitTestDirective,
    ToUpperCasePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    // MsalModule.forRoot(new PublicClientApplication({
    //   auth: {
    //     clientId: 'Enter_the_Application_Id_here', // Application (client) ID from the app registration
    //     authority: 'Enter_the_Cloud_Instance_Id_Here/Enter_the_Tenant_Info_Here', // The Azure cloud instance and the app's sign-in audience (tenant ID, common, organizations, or consumers)
    //     redirectUri: 'Enter_the_Redirect_Uri_Here'// This is your redirect URI
    //   },
    //   cache: {
    //     cacheLocation: 'localStorage',
    //     //storeAuthStateInCookie: isIE, // Set to true for Internet Explorer 11
    //   }
    // }), null, null),
    GoogleMapsModule,
    CanvasWhiteboardModule,
    ImgMagnifier,
    HttpClientModule
  ],
  providers: [CanvasWhiteboardShapeService],
  bootstrap: [AppComponent],

})
export class AppModule { }
