import { Body, Controller, Post } from '@nestjs/common';
import { GenreService } from './genre.service';
import { CreateGenreDto } from './dto/createGenreDto';

@Controller('genre')
export class GenreController {
  constructor(private genreService: GenreService) {}

  @Post('create')
  async createGenre(@Body() createGenreDto: CreateGenreDto) {
    return await this.genreService.createGenre(createGenreDto);
  }
}
