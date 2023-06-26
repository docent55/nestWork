import { GenreEntity } from 'src/genre/genre.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'movie' })
export class MovieEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  time: number;

  @Column()
  posterBig: string;

  @Column()
  posterSmall: string;

  @Column()
  description: string;

  // @ManyToOne(() => GenreEntity, (genre) => genre.name)
  // genres: GenreEntity[];
  @ManyToMany(() => GenreEntity)
  @JoinTable()
  genres: GenreEntity[];
}
