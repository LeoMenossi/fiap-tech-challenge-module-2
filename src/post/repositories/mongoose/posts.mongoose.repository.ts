import { IPosts } from "src/post/schemas/models/posts.interface";
import { PostsRepository } from "../posts.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Posts } from "src/post/schemas/posts.schema";
import { Model } from "mongoose";

export class PostsMongooseRepository implements PostsRepository {
    constructor(@InjectModel(Posts.name) private postsModel: Model<Posts>) { }

    getAllPosts(limit: number, page: number): Promise<IPosts[]> {
        const offset = (page - 1) * limit

        return this.postsModel.find().skip(offset).limit(limit).exec()
    }
    getPostById(postId: string): Promise<IPosts> {
        return this.postsModel.findById(postId).exec()
    }
    async createPost(post: IPosts): Promise<void> {
        const createPost = new this.postsModel(post)

        await createPost.save()
    }
    async updatePost(postId: string, content: string): Promise<void> {
        await this.postsModel.updateOne({ _id: postId }, { content: content }).exec()
    }
    getPostByAuthor(author: string): Promise<IPosts[]> {
        return this.postsModel.find({ author: author }).exec()
    }
    async deletePost(postId: string): Promise<void> {
        await this.postsModel.deleteOne({ _id: postId }).exec()
    }
    searchPostByWord(keyword: string): Promise<IPosts[]> {
        return this.postsModel.find({
            $or: [
                {title: {$regex: keyword}},
                {content: {$regex: keyword }}
            ]
        }).exec()
    }
}