import { ShapeFactory } from "./factories/ShapeFactory";
import { IShape } from "./interfaces/IShape";

const shapeFactory = new ShapeFactory();
 
//get an object of Circle and call its draw method.
const shape1: IShape | null = shapeFactory.getShape("CIRCLE");

//call draw method of Circle
shape1?.draw();

//get an object of Rectangle and call its draw method.
const shape2: IShape | null = shapeFactory.getShape("RECTANGLE");

//call draw method of Rectangle
shape2?.draw();

//get an object of Square and call its draw method.
const shape3: IShape | null = shapeFactory.getShape("SQUARE");

//call draw method of square
shape3?.draw();