import { IsInt, IsOptional } from "class-validator";

export class getUserDTO{
    @IsOptional() //this makes an id as optional......
    @IsInt()  //this makes sures this is always an integer....
    id?:number 
}