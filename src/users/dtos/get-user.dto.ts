import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";

export class getUserDTO{
    @IsOptional() //this makes an id as optional......
    @IsInt()  //this makes sures this is always an integer....
    @Type(()=>Number) //this is javascript number type 
    id?:number 
}