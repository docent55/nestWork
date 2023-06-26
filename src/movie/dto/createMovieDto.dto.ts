import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty({ message: 'Введите название фильма' })
  readonly name: string;

  @IsNotEmpty({ message: 'Укажите к каким жанрам относится фильм' })
  readonly genres: string[];

  //   @PrimaryGeneratedColumn()
  //   id: number;

  //   @Column()
  //   name: string;

  //   @Column()
  //   time: number;

  //   @Column()
  //   posterBig: string;

  //   @Column()
  //   posterSmall: string;

  //   @Column()
  //   description: string;

  //   @OneToMany(() => GenreEntity, (genre) => genre.name)
  //   genres: GenreEntity[];
}
