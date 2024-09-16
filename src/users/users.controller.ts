import {
    Body,
    Controller,
    Get,
    Param,
    Post,
    Query,
    Req,
    Headers,
    Ip,
    ParseIntPipe,
    DefaultValuePipe,
    ValidationPipe,
    Patch,
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { getUserDTO } from './dtos/get-user.dto';
import { PatchUserDTO } from './dtos/patch-users.dto';
import { UsersService } from './providers/users.service';

@Controller('users')
export class UsersController {

    constructor(private usersSvc:UsersService){

    }

    @Get('/:id?')
    public getUsers(@Param() getUsersParamDTO: getUserDTO, // Use DTO directly, //this will validate all the params that are part of the route...
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number) {
         //return this.usersSvc.findAll(getUsersParamDTO,limit,page);
         return this.usersSvc.findOneById(getUsersParamDTO);
    }

    @Post()
    public userCreate(@Body() createUserDto: CreateUserDto,
        @Headers() headers: any,
        @Ip() ip: any) {
        console.log(createUserDto);
        console.log(headers);
        console.log(ip);
        return "Users created";
    }

    @Patch()
    public patchUser(@Body() patchUserDto: PatchUserDTO) {
        return patchUserDto;
    }

}
