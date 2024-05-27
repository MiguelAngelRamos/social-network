import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { User } from 'src/users/schemas/user.schema';

@Schema()
export class Follower extends Document {

  @Prop({ type: String, ref: 'User', required: true })
  follower: User;

  @Prop({ type: String, ref: 'User', required: true })
  following: User;

  @Prop({default: Date.now})
  createdAt: Date;

}
export const FollowerSchema = SchemaFactory.createForClass(Follower);