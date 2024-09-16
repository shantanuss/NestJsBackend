import { PartialType } from "@nestjs/mapped-types";
import { CreateUserDto } from "./create-user.dto";

export class PatchUserDTO extends PartialType(CreateUserDto){ 
   
}

//this takes all the properties of create user dto maintains all
// the validation logic and make all properties of create user dto as optional properties 
//now in PatchUserDto all the properties of CreateUserDto will become optional