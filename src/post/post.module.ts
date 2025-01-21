import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Posts, PostsSchema } from './schemas/posts.schema';
import { PostsRepository } from './repositories/posts.repository';
import { PostsMongooseRepository } from './repositories/mongoose/posts.mongoose.repository';
import { PostsService } from './services/posts.service';
import { PostsController } from './controllers/posts.controller';

@Module({
    imports:[
        MongooseModule.forFeature([
            {
                name: Posts.name,
                schema: PostsSchema
            }
        ])
    ],
    providers: [
        {
            provide: PostsRepository,
            useClass: PostsMongooseRepository
        },
        PostsService
    ],
    controllers:[
        PostsController
    ]
})
export class PostModule {}
