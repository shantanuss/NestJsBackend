import { Injectable } from "@nestjs/common";
import { getPostsDTO } from "../dtos/get-post-dto";
import { posts } from "./posts-data";
import { UsersService } from "src/users/providers/users.service";

@Injectable()
export class PostService{
    posts:any[];
    constructor(private userSvc:UsersService){
        this.posts = posts;
    }
   public findAll(getPostsParamDta:getPostsDTO,limit:number,page:number){
    return this.posts;
   }

   public findOneById(getPostsParamDta:getPostsDTO){
    console.log(getPostsParamDta.id);
    const data = this.userSvc.findOneById(getPostsParamDta);
    return data;
    //return this.posts.find(posts=>posts.id===getPostsParamDta.id);
   }
}