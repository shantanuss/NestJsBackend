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
} from '@nestjs/common';
import { Request } from 'express';
import { CreateUserDto } from './dtos/create-user.dto';
import { getUserDTO } from './dtos/get-user.dto';

@Controller('users')
export class UsersController {

    @Get('/:id/:optional?')
    public getUsers(@Param() getUSerParamsDto: getUserDTO, //this will validate all the params that are part of the route...
        @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
        @Query('page',  new DefaultValuePipe(1), ParseIntPipe) page: number) {
        console.log(limit);
        console.log(page);
        //console.log(typeof id)

        //return id;
    }

    //  @Post()
    //  public userCreate(@Req() requestBody:Request){
    //     console.log(requestBody)
    //      return "Users created";
    //  }

    @Post()
    public userCreate(@Body() createUserDto:CreateUserDto, 
    @Headers() headers: any, 
    @Ip() ip: any) {
        console.log(createUserDto);
        console.log(headers);
        console.log(ip);
        return "Users created";
    }
}
