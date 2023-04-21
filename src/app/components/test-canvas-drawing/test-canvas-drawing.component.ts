import { AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CanvasWhiteboardOptions, CanvasWhiteboardPoint, CanvasWhiteboardShapeOptions, CanvasWhiteboardShapeService } from 'ng2-canvas-whiteboard';
import { Rectangle } from 'src/app/services/rectangle';

@Component({
  selector: 'app-test-canvas-drawing',
  templateUrl: './test-canvas-drawing.component.html',
  styleUrls: ['./test-canvas-drawing.component.scss']
})
export class TestCanvasDrawingComponent implements OnInit,AfterViewInit {

  drawItems = []
  originalItems = []
  count = 0
  //@Input('CanvasHeight') CanvasHeight:number = 250;
  //@Input('CanvasWidth') CanvasWidth:number = 300;
  CanvasHeight:number = 400;
  CanvasWidth:number = 400;

  @Output() selected = new EventEmitter();
  taggedItem = ""
  showInput: boolean = false;
  isMoving: boolean = false;
  public imgWidth: number = 0;
  public uniX: any;
  public uniY: any;
  public uniX2: any;
  public uniY2: any;
  public initX: number = 0;
  public initY: number = 0;
  public imgHeight: number = 0;
  public url: string = '';
  public image:any;
  public originalImageWidth = 0;
  public originalImageHeight = 0;
  public hRatio:number = 0;
  public vRatio:number = 0;
  public translatePos = {x: this.CanvasWidth / 2, y: this.CanvasHeight / 2};
  public scale = 1.0;
  public scaleMultiplier = 0.8;
  @ViewChild("layer1", { static: false }) layer1Canvas!: ElementRef;
  // context!: CanvasRenderingContext2D;
  canvas:any;
  context:any;
  private layer1CanvasElement: any;
  detectionSectors = new Array();

  @ViewChild("buffercanvas", { static: false }) bufferCanvas!: ElementRef;
  bfCanvas:any;
  bufferCtx:any;
  testImage:string = "https://www.tutorialspoint.com/assets/questions/media/426142-1668760872.png";

  canvasOptions:CanvasWhiteboardOptions = {
    strokeColor: "green",
    shouldDownloadDrawing: true,
    scaleFactor:1.8,
    imageUrl:this.testImage
  }

  canvasWhiteboardShapeOptions = new CanvasWhiteboardShapeOptions(); 

  myRect = new Rectangle();
  superCtx!:CanvasRenderingContext2D;

  @ViewChild('canvasWhiteboard') canvasWtboard!:ElementRef;
  whiteBoardCanvas:any;
  whiteBoardCtx!:CanvasRenderingContext2D;

  constructor(private canvasWhiteboardShapeService:CanvasWhiteboardShapeService) {

   }

  ngOnInit(): void {
    this.detectionSectors.push({xCordOffset:150,yCordOffset:40});
    this.detectionSectors.push({xCordOffset:50,yCordOffset:100});
    this.detectionSectors.push({xCordOffset:180,yCordOffset:130});
    //this.imageLoad();
  }

  ngAfterViewInit(): void {
   // this.imageLoad();
   this.whiteBoardCanvas = this.canvasWtboard.nativeElement;
   this.whiteBoardCtx = this.whiteBoardCanvas.getContext("2d");
    this.canvasWhiteboardShapeService.registerShape(Rectangle);
    this.drawRects();
  }

  imageLoaded(event:any){
    console.log("Image Loaded..." + JSON.stringify(event));
  }

  zoomIn(){
    console.log("zooming in")
    this.scale /= this.scaleMultiplier;
    //this.showImage();
    this.redrawCanvas();
  }

  zoomOut(){
    console.log("zooming out")
    this.scale *= this.scaleMultiplier;
    //this.showImage();
    this.redrawCanvas();
  }

  //load image
  // This image initializes the image abd sets h and w of the canvas element
  imageLoad() {
    this.image = new Image(400,400);
    this.image.src = "https://i.ibb.co/12TJSNy/patio.jpg";
    this.image.onload = () => {
      console.log(this.CanvasWidth, this.CanvasHeight);
      console.log(this.image.width, this.image.height);
      this.originalImageWidth = this.image.width; //400
      this.originalImageHeight = this.image.height; //400
      //this.image.width = this.CanvasWidth;
      //this.image.height = this.CanvasHeight;
      this.hRatio = this.originalImageWidth/this.CanvasWidth;
      this.vRatio = this.originalImageHeight/this.CanvasHeight; 
      
      this.canvas = this.layer1Canvas.nativeElement;
      this.context = this.canvas.getContext('2d');

      this.bfCanvas = this.bufferCanvas.nativeElement;
      this.bufferCtx = this.bfCanvas.getContext('2d');

      this.bfCanvas.width = this.image.width;
      this.bfCanvas.height = this.image.height;
      
      this.showImage();
    }
  }

  showImage() {
    this.count ++;
    //this.layer1CanvasElement = this.layer1Canvas.nativeElement;
   // this.context = this.layer1CanvasElement.getContext("2d");
    this.bufferCtx.clearRect(0, 0, this.CanvasWidth, this.CanvasHeight);
    this.bufferCtx.save();
    this.bufferCtx.translate(this.translatePos.x, this.translatePos.y);
    this.bufferCtx.scale(this.scale, this.scale);
    this.bufferCtx.drawImage(this.image, 0,0, this.image.width, this.image.height);
    this.bufferCtx.restore()
   // let parent = this;
    //if(this.count==1){
      this.bfCanvas.addEventListener("mousedown", (e:any) => {
        this.isMoving = true
        this.initX = e.offsetX;
        this.initY = e.offsetY;
      });

    this.bfCanvas.addEventListener("mouseup", (e:any) => {
        this.isMoving = false
        this.showInput = true

        //this.drawRect("red", e.offsetX - this.initX, e.offsetY - this.initY, 0);
        this.uniX = undefined
        this.uniY = undefined
    });
  //}
    

    this.bfCanvas.addEventListener("mousemove", (e:any) => {
        if (this.isMoving) {
            this.drawRect("red", e.offsetX - this.initX, e.offsetY - this.initY, 0);
        }
    });

    this.drawRect("red", 0, 0, 1);

}


//Draw rectangle
drawRect(color = "black", height:number, width:number, flag:any) {
  if (this.uniX | flag) {
    this.bufferCtx.clearRect(0, 0, this.CanvasWidth, this.CanvasHeight);
    this.bufferCtx.save();
    this.bufferCtx.translate(this.translatePos.x, this.translatePos.y);
    this.bufferCtx.scale(this.scale, this.scale);
    this.bufferCtx.drawImage(this.image, 0,0, this.image.width, this.image.height);
    this.bufferCtx.restore();
  }


  // console.log(this.image.width, this.image.height)
  this.uniX = height
  this.uniY = width
  this.uniX2 = height
  this.uniY2 = width
 
  this.bufferCtx.beginPath();
  this.bufferCtx.strokeStyle = "#FF0000";
      
      this.detectionSectors.forEach((sector) => {
        let al = {state:"normal",temps:"max"}
        this.bufferCtx.strokeRect(sector.xCordOffset,sector.yCordOffset, 100, 50); //vals from Thomas
        this.bufferCtx.fillStyle="red";
        this.bufferCtx.fillText("State: " + al.state,sector.xCordOffset,sector.yCordOffset - 20);
        this.bufferCtx.fillText("Temperatures: " + al.temps,sector.xCordOffset,sector.yCordOffset - 10);
      });

      this.context.drawImage( this.bfCanvas, 0, 0);
}

//redraw canvas
redrawCanvas(){
  //this.scale *= this.scaleMultiplier;
  this.bufferCtx.clearRect(0, 0, this.CanvasWidth, this.CanvasHeight);
  this.bufferCtx.save();
  this.bufferCtx.translate(this.translatePos.x, this.translatePos.y);
  this.bufferCtx.scale(this.scale, this.scale);
  this.bufferCtx.drawImage(this.image, 0,0, this.image.width, this.image.height);
  this.bufferCtx.restore();

  //add events

  //cont
  this.bufferCtx.beginPath();
  this.bufferCtx.strokeStyle = "#FF0000";
      
      this.detectionSectors.forEach((sector) => {
        let al = {state:"normal",temps:"max"}
        this.bufferCtx.strokeRect(sector.xCordOffset,sector.yCordOffset, 100, 50); //vals from Thomas
        this.bufferCtx.fillStyle="red";
        this.bufferCtx.fillText("State: " + al.state,sector.xCordOffset,sector.yCordOffset - 20);
        this.bufferCtx.fillText("Temperatures: " + al.temps,sector.xCordOffset,sector.yCordOffset - 10);
      });

      this.context.drawImage( this.bfCanvas, 0, 0);
  
}

//Draw rectangles
drawRects(){
  //context
  this.detectionSectors.forEach((sector)=>{
    let rect = new Rectangle();
    this.canvasWhiteboardShapeOptions.strokeStyle = "blue";
    rect = new Rectangle(new CanvasWhiteboardPoint(sector.xCordOffset,sector.yCordOffset),this.canvasWhiteboardShapeOptions);
    rect.draw(this.whiteBoardCtx);
  })
}
}
