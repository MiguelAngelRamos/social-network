import { IsString, IsNotEmpty } from 'class-validator';

export class CreateFollowerDto {

    @IsString()
    @IsNotEmpty()
    followerId: string;

    @IsString()
    @IsNotEmpty()
    followingId: string;

}