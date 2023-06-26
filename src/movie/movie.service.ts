import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MovieEntity } from './movie.entity';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/createMovieDto.dto';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(MovieEntity)
    private readonly movieRepository: Repository<MovieEntity>,
  ) {}

  async createMovie(createMovieDto: CreateMovieDto) {
    const newMovie = new MovieEntity();

    Object.assign(newMovie, createMovieDto);

    return await this.movieRepository.save(newMovie);
  }

  async getAllMovies() {
    return await this.movieRepository.find({
      relations: {
        genres: true,
      },
    });
  }

  async getFiveLastMovies() {
    return await this.movieRepository.find({
      relations: {
        genres: true,
      },
      order: { id: 'DESC' },
      take: 5,
    });
  }
}
