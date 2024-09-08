import { IsEmail, IsNotEmpty, isNotEmpty, isString, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUserDto{
   @IsString()
   @IsNotEmpty()
   @MinLength(3)
   @MaxLength(96)
   firstName:string;

   @IsString()
   @IsNotEmpty()
   @MinLength(3)
   @MaxLength(96)
   lastName:string;

   @IsString()
   @IsNotEmpty()
   @IsEmail()
   email:string;

   @IsString()
   @IsNotEmpty()
   @MinLength(8)
   @Matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,{
    message:"one letter one characyer one speical chatracter!!!!!!!!!!!!!!!!!!"
   })
   password:string
}