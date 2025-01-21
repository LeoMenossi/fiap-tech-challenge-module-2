import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { IPosts } from "./models/posts.interface";
import mongoose, { HydratedDocument } from "mongoose";

export type PostsDocument = HydratedDocument<Posts>

@Schema()
export class Posts implements IPosts {
    @Prop({type: mongoose.Schema.Types.ObjectId})
    id?: string;
    @Prop()
    title: string;
    @Prop()
    content: string;
    @Prop()
    author: string;
}

export const PostsSchema = SchemaFactory.createForClass(Posts);