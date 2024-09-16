import { DefaultValuePipe, Get, Module, Param, ParseIntPipe, Query } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { getPostsDTO } from './dtos/get-post-dto';
import { PostService } from './providers/posts-service';
import { UsersModule } from 'src/users/users.module';
@Module({
  controllers: [PostsController],
  providers:[PostService],
  imports:[UsersModule]
})
export class PostsModule {
 
}
