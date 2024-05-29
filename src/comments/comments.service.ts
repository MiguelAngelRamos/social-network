import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCommentDto } from './dto/create-comment.dto';
import { Comment } from './schemas/comment.schema';
import { Follower } from 'src/followers/schemas/follower.schema';

@Injectable()
export class CommentsService {

  constructor(
    @InjectModel(Comment.name) private commentModel:Model<Comment>,
    @InjectModel(Follower.name) private followerModel:Model<Follower>
  ) {}

  create(CreateCommentDto: CreateCommentDto):Promise<Comment> {
    const createdComment = new this.commentModel({
      text: CreateCommentDto.text,
      author: CreateCommentDto.authorId,
      imageUrl: CreateCommentDto.imageUrl
    });
    return createdComment.save();
  }

  // El usuario A  debe seguir a otros usuarios (B,C,D) y vamos a crear un metodo que nos permita obtener los comentarios de los usuarios que sigue el usuario (A)
  async findAllByUser(userId: string) {
    // Obtenemos la lista de usuarios a los que sigue el usuario especificado
    const followers = await this.followerModel.find({follower: userId }).exec();
    
    // Extraer los IDs de los usuarios
    const followingIds = followers.map( f => f.following);

    return this.commentModel.find({author: {$in:followingIds}}).exec();
  }

}
