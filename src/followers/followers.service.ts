import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Follower } from './schemas/follower.schema';
import { Model } from 'mongoose';
import { CreateFollowerDto } from './dto/create-follower.dto';

@Injectable()
export class FollowersService {
  constructor(@InjectModel(Follower.name) private followerModel: Model<Follower>) {}

  create(createFollowerDto: CreateFollowerDto): Promise<Follower> {
    const createdFollower = new this.followerModel({
      follower: createFollowerDto.followerId,
      following: createFollowerDto.followingId
    });
    return createdFollower.save();
  }
}
