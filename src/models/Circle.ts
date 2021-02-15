import { IShape } from "../interfaces/IShape";

export class Circle implements IShape {
    draw(){
        console.log("Inside Circle::draw() method.")
    }
}