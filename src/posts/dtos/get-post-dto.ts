import { Type } from "class-transformer";
import { IsInt, IsOptional } from "class-validator";

export class getPostsDTO {
    @IsOptional() //this makes an id as optional......
    @IsInt()  //this makes sures this is always an integer....
    @Type(()=>Number) //this is javascript number type 
    id?:number 
}