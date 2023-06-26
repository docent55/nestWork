import { IsNotEmpty } from 'class-validator';

export class CreateGenreDto {
  @IsNotEmpty({ message: 'Введите название жанра' })
  readonly name: string;
}
