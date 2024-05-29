import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Comment, CommentSchema } from './schemas/comment.schema';
import { FollowersModule } from 'src/followers/followers.module';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Comment.name, schema: CommentSchema}]),
    FollowersModule
  ],
  providers: [CommentsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
