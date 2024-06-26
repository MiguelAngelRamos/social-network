import { Body, Controller, Post } from '@nestjs/common';
import { FollowersService } from './followers.service';
import { CreateFollowerDto } from './dto/create-follower.dto';

@Controller('followers')
export class FollowersController {
  constructor(private readonly followersService: FollowersService) {}

  @Post()
  create(@Body() createFollowerDto: CreateFollowerDto) {
    return this.followersService.create(createFollowerDto);
  }

  
}
