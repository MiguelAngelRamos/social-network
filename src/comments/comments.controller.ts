import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { CommentsService }  from './comments.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { fileStorage } from '../common/interceptors/file-storage.interceptor';

@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService:CommentsService){}

  @Post()
  @UseInterceptors(FileInterceptor('file', {
    storage: fileStorage
  }))
  // @UploadedFile() acceder al archivo subido
  create(@Body() createCommentDto: CreateCommentDto, @UploadedFile() file: Express.Multer.File) {
    if(file) {
      createCommentDto.imageUrl = file.filename;
    }
    return this.commentsService.create(createCommentDto);
  }
}
