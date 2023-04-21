import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentUnitTestComponent } from './components/component-unit-test/component-unit-test.component';
import { GetAzureADTokenComponent } from './components/get-azure-adtoken/get-azure-adtoken.component';
import { HomeComponent } from './components/home/home.component';
import { TestCanvasDrawingComponent } from './components/test-canvas-drawing/test-canvas-drawing.component';
import { TestDirectivesComponent } from './components/test-directives/test-directives.component';
import { TestFileUploadComponent } from './components/test-file-upload/test-file-upload.component';
import { TestGoogleMapsComponent } from './components/test-google-maps/test-google-maps.component';
import { TestImageMagnifierComponent } from './components/test-image-magnifier/test-image-magnifier.component';
import { TestMatTablesComponent } from './components/test-mat-tables/test-mat-tables.component';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
   {
     path:'',
     redirectTo:'home',
     pathMatch:'full'
   },
   {
    path:'directives',
    component:TestDirectivesComponent
  },
  {
    path:'login',
    component:GetAzureADTokenComponent
  },
  {
    path:'fileupload',
    component:TestFileUploadComponent
  },
  {
    path:'canvasdrawing',
    component:TestCanvasDrawingComponent
  },
  {
    path:'googlemaps',
    component:TestGoogleMapsComponent
  },
  {
    path:'imagmagnifier',
    component:TestImageMagnifierComponent
  },
  {
    path:'componentunittests',
    component:ComponentUnitTestComponent
  }
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
