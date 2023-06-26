import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FileEntity } from './file.entity';
import { Repository } from 'typeorm';
import * as path from 'path';
import * as crypto from 'crypto';
import * as fs from 'fs';
import { path as rootPath } from 'app-root-path';

@Injectable()
export class FileService {
  constructor(
    @InjectRepository(FileEntity)
    private readonly fileRepository: Repository<FileEntity>,
  ) {}

  private uploadFolder = `${rootPath}/uploads`;

  async createFile(file: Express.Multer.File): Promise<FileEntity> {
    if (!file) {
      throw new BadRequestException('File does not exist');
    }

    const filename =
      crypto.randomBytes(20).toString('hex') + path.extname(file.originalname);

    const filePath = path.join(this.uploadFolder, filename);

    fs.writeFileSync(filePath, file.buffer);

    const newFile = new FileEntity();

    Object.assign(newFile, {
      filename,
      originalname: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      filePath: `/uploads/${filename}`,
    });

    return await this.fileRepository.save(newFile);
  }
}
