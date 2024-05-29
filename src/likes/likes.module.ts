import { Module } from '@nestjs/common';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { LikeSchema, Likes } from './schemas/likes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{name: Likes.name, schema: LikeSchema}])
  ],
  providers: [LikesService],
  controllers: [LikesController]
})
export class LikesModule {}
