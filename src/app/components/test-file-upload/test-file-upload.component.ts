import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-file-upload',
  templateUrl: './test-file-upload.component.html',
  styleUrls: ['./test-file-upload.component.scss']
})
export class TestFileUploadComponent implements OnInit {
   fuPlaceholder:string = 'No files chosen';
   url:any = "";

  constructor() { }

  ngOnInit(): void {
  }

  processUploadedFile(event:any){
     console.log("Uploaded file is: " + JSON.stringify(event.target.value));
     //console.log(event.target.value)

     let mimeType = event.target.files[0].type;
     if(!event.target.files[0] || event.target.files[0].length == 0){
        console.log("Sio file....")
        alert("You must choose a file.");
     }

     else if(mimeType.match(/image\/*/) == null) {
      console.log("Si image....")
		   alert("File must be an image!")
		}
    else{
      console.log("Iko sawa....")
      let fileReader = new FileReader();
      fileReader.readAsDataURL(event.target.files[0]);
      fileReader.onload = (eve)=>{
        this.url = fileReader.result;
      }
      console.log("results is: " + fileReader.result)

      console.log("Image url issss: " +  JSON.stringify(this.url));
      
    }

  }

}
