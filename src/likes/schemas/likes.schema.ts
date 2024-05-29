import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document} from "mongoose";
import { Comment } from "src/comments/schemas/comment.schema";
import { User } from "src/users/schemas/user.schema";

@Schema()
export class Likes extends Document {

  @Prop({type: String, ref: 'User', required: true})
  user: User;

  @Prop({type: String, ref: 'Comment', required: true})
  comment: Comment;

  @Prop({default: Date.now })
  createAt: Date;
  //TODO: dislike y tambien el hecho de responder a los comentarios.
}

export const LikeSchema = SchemaFactory.createForClass(Likes);