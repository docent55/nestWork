import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { FileService } from './file.service';

@Controller('file')
export class FileController {
  constructor(private fileService: FileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file', { limits: { fieldSize: 2000 } }))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    return await this.fileService.createFile(file);
  }
}
