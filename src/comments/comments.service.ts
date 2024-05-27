import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';

@Injectable()
export class CommentsService {

  constructor(@InjectModel(Comment.name) private commentModel:Model<Comment>) {}

  create(CreateCommentDto: CreateCommentDto):Promise<Comment> {
    const createdComment = new this.commentModel({
      text: CreateCommentDto.text,
      author: CreateCommentDto.authorId,
      imageUrl: CreateCommentDto.imageUrl
    });
    return createdComment.save();
  }

}
