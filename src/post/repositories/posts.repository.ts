import { IPosts } from "../schemas/models/posts.interface";

export abstract class PostsRepository {
    abstract getAllPosts(limit: number, page: number): Promise<IPosts[]>
    abstract getPostById(postId:string): Promise<IPosts>
    abstract createPost(post: IPosts): Promise<void>
    abstract updatePost(postId: string, content: string): Promise<void>
    abstract getPostByAuthor(author: string): Promise<IPosts[]>
    abstract deletePost(postId: string): Promise<void>
    abstract searchPostByWord(keyword: string): Promise<IPosts[]>
}