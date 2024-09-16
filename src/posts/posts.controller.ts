import { Body, Controller, Post } from '@nestjs/common';
import { DefaultValuePipe, Get, Module, Param, ParseIntPipe, Query, Headers,Ip } from '@nestjs/common';
import { getPostsDTO } from './dtos/get-post-dto';
import { PostService } from './providers/posts-service';

@Controller('posts')
export class PostsController {
    constructor(private postSvc:PostService){}

    @Get('/:id?')
    public getUsers(
      @Param() getPostParamDTO : getPostsDTO,
      @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number,
      @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number
    ){
        //return this.postSvc.findAll(getPostParamDTO,limit,page);
        return this.postSvc.findOneById(getPostParamDTO);
    }

    @Post()
    public createPosts(@Body() postsBody:getPostsDTO,
    @Headers() headers: any,
    @Ip() ip: any){
      return "posts created";
        }
}
