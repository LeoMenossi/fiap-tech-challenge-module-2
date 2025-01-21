import { Injectable, NotFoundException } from "@nestjs/common";
import { PostsRepository } from "../repositories/posts.repository";
import { IPosts } from "../schemas/models/posts.interface";

@Injectable()
export class PostsService {
    constructor(private readonly postsRepository: PostsRepository){}

    async getAllPosts(limit: number, page: number){
        return this.postsRepository.getAllPosts(limit, page)
    }

    async getPostById(postId: string) {
        const post = await this.postsRepository.getPostById(postId)

        if(!post) throw new NotFoundException('Post not found')
        
        return post
    }

    async createPost(post: IPosts){
        return this.postsRepository.createPost(post)
    }

    async updatePost(postId: string, content: string){
        return this.postsRepository.updatePost(postId, content)
    }

    async getPostByAuthor(author: string){
        const post = await this.postsRepository.getPostByAuthor(author)

        if(!post) throw new NotFoundException('Not found any post by this author')

        return post
    }

    async deletePost(postId: string){
        return this.postsRepository.deletePost(postId)
    }

    async searchPostByWord(keyword: string){
        const post = await this.postsRepository.searchPostByWord(keyword)

        if(!post) throw new NotFoundException(`Not found any post with this keyword: ${keyword}`)

        return post
    }
}