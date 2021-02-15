import { IShape } from "../interfaces/IShape";
import { Circle } from "../models/Circle";
import { Rectangle } from "../models/Rectangle";
import { Square } from "../models/Square";

export class ShapeFactory {
	
    //use getShape method to get object of type shape 
    getShape(shapeType: string): IShape | null {
       if(shapeType == null){
          return null;
       }		
       if(shapeType === "CIRCLE"){
          return new Circle();
          
       } else if(shapeType === "RECTANGLE"){
          return new Rectangle();
          
       } else if(shapeType === "SQUARE"){
          return new Square();
       }
       
       return null;
    }
 }