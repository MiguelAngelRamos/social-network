import { Injectable } from '@nestjs/common';
import { Likes } from './schemas/likes.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateLikeDto } from './dto/create-like.dto';

@Injectable()
export class LikesService {

  constructor(@InjectModel(Likes.name) private likesModel: Model<Likes>){}

  async create( createLikeDto: CreateLikeDto): Promise<Likes> {
    const createdLikes = new this.likesModel({
      user: createLikeDto.userId,
      comment: createLikeDto.commentId,
    });
    return createdLikes.save();
  }

  //TODO: testear este metodo
  async remove(id: string): Promise<void> {
    await this.likesModel.findByIdAndDelete(id).exec();
  }

}
