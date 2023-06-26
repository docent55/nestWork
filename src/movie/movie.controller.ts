import { Body, Controller, Get, Post } from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/createMovieDto.dto';

@Controller('movie')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Post('create')
  async createMovie(@Body() createMovieDto: CreateMovieDto) {
    return await this.movieService.createMovie(createMovieDto);
  }

  @Get('')
  async getMovies() {
    return await this.movieService.getAllMovies();
  }

  @Get('lasts')
  async getLastFive() {
    return await this.movieService.getFiveLastMovies();
  }
}
