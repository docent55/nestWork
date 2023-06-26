import { MovieEntity } from 'src/movie/movie.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'genre' })
export class GenreEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @ManyToMany(() => MovieEntity, (movie) => movie.genres)
  movies: MovieEntity;
}
