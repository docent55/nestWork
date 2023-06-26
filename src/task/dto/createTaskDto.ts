import { IsDateString, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsNotEmpty({ message: 'Введите номер' })
  number: number;

  @IsNotEmpty()
  @IsDateString()
  readonly dateStart: Date;

  @IsNotEmpty()
  @IsDateString()
  readonly dateEnd: Date;
}
