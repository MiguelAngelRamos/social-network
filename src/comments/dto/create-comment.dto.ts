import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {

  @IsString()
  @IsNotEmpty()

  readonly text:string;
  @IsString()
  @IsNotEmpty()

  readonly authorId: string;
  @IsString()
  imageUrl?: string
}
