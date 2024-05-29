import { Module } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { FollowersController } from './followers.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Follower, FollowerSchema } from './schemas/follower.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Follower.name, schema: FollowerSchema}])
  ],
  providers: [FollowersService],
  controllers: [FollowersController],
  exports: [MongooseModule]
})
export class FollowersModule {}
