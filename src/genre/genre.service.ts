import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GenreEntity } from './genre.entity';
import { Repository } from 'typeorm';
import { CreateGenreDto } from './dto/createGenreDto';

@Injectable()
export class GenreService {
  constructor(
    @InjectRepository(GenreEntity)
    private readonly genreRepository: Repository<GenreEntity>,
  ) {}

  async createGenre(createGenreDto: CreateGenreDto) {
    const genreByName = await this.genreRepository.findOne({
      where: { name: createGenreDto.name },
    });

    if (genreByName) {
      throw new HttpException(
        'Это имя жанра уже используется',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newGenre = new GenreEntity();

    Object.assign(newGenre, createGenreDto);

    return await this.genreRepository.save(newGenre);
  }

  // async getGenreWithName(name: string) {
  //   return this.genreRepository.findOne({ where: { name } });
  // }
}
