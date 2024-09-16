import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class createPostsDTO {
    @IsOptional() //this makes an id as optional......
    @IsInt()  //this makes sures this is always an integer....
    @Type(()=>Number) //this is javascript number type 
    id?:number

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    postTitle:string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(96)
    postContent:string;
}