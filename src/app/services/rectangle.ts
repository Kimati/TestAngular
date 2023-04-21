import { CanvasWhiteboardPoint, CanvasWhiteboardShape, CanvasWhiteboardShapeOptions, CanvasWhiteboardUpdate } from "ng2-canvas-whiteboard";


export class Rectangle extends CanvasWhiteboardShape{
    
    //constructor
    constructor(startPoint?:CanvasWhiteboardPoint,options?:CanvasWhiteboardShapeOptions){
        super(startPoint,options);
    }

    getShapeName(): string {
       return "Rectangle";
    }

    onUpdateReceived(update: CanvasWhiteboardUpdate): void {
       
    }
    draw(context: CanvasRenderingContext2D): any {
        Object.assign(context,this.options);
        context.save();
        context.beginPath();
        context.stroke();
        context.fill();
        context.closePath();
        context.restore();

        // this.bufferCtx.strokeRect(sector.xCordOffset,sector.yCordOffset, 100, 50); //vals from Thomas
        // this.bufferCtx.fillStyle="red";
    }
    drawPreview(context: CanvasRenderingContext2D): void {
        
    }
    
}