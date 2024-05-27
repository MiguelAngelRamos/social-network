import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comment.schema';

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

  // El usuario A  debe seguir a otros usuarios (B,C,D) y vamos a crear un metodo que nos permita obtener los comentarios de los usuarios que sigue el usuario (A)
  findAllByUser(userId: string) {
    //TODO: Los comentarios de los usuarios que sigue este usuario en particular
  }

}
