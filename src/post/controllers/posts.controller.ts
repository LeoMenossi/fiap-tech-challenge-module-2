import { Body, Controller, Delete, Get, Param, Post, Put, Query, UseGuards, UsePipes } from "@nestjs/common";
import { PostsService } from "../services/posts.service";
import { z } from "zod";
import { ZodValidationPipe } from "src/shared/pipe/zod.validation.pipe";
import { AuthGuard } from "src/shared/guards/auth.guard";

const createPostSchema = z.object({
    title: z.string(),
    content: z.string(),
    author: z.string()
})

const updatePostSchema = z.object({
    content: z.string()
})

type CreatePost = z.infer<typeof createPostSchema>
type UpdatePost = z.infer<typeof updatePostSchema>

@Controller('posts')
export class PostsController{
    constructor(private readonly postsService: PostsService){}

    @Get()
    async getAllPosts(
        @Query('limit') limit: number, 
        @Query('page') page: number
    ){
        return this.postsService.getAllPosts(limit, page)
    }

    @Get(':postId')
    async getPostById(
        @Param('postId') postId: string
    ){
        return this.postsService.getPostById(postId)
    }

    @UseGuards(AuthGuard)
    @UsePipes(new ZodValidationPipe(createPostSchema))
    @Post()
    async createPost(
        @Body() {title, content, author}: CreatePost 
    ){
        return this.postsService.createPost({title, content, author})
    }

    @UseGuards(AuthGuard)
    @Put(':postId')
    async updatePost(
        @Param('postId') postId: string,
        @Body(new ZodValidationPipe(updatePostSchema)) {content}: UpdatePost
    ){
        return this.postsService.updatePost(postId, content)
    }

    @UseGuards(AuthGuard)
    @Get('author/:author')
    async getPostByAuthor(
        @Param('author') author: string
    ){
        return this.postsService.getPostByAuthor(author)
    }

    @Delete(':postId')
    async deletePost(
        @Param('postId') postId: string
    ){
        return this.postsService.deletePost(postId)
    }

    @Get('keyword/:keyword')
    async searchPostByWord(
        @Param('keyword') keyword: string
    ){
        return this.postsService.searchPostByWord(keyword)
    }
}