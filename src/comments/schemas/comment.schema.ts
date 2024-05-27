import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from '../../users/schemas/user.schema';

@Schema()
export class Comment extends Document {

  @Prop({required: true })
  text: string;
  // ref srive para indicar a Mongoose que el campo author es una referencia a al document de la colección User
  @Prop({type: String, ref: 'User', required: true})
  author: User;

  @Prop()
  imageUrl?: string;

  @Prop({ default: Date.now })
  createAt:Date;

}

export const CommentSchema = SchemaFactory.createForClass(Comment);
