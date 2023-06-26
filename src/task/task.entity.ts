import { UserEntity } from 'src/user/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'task' })
export class TaskEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  number: number;

  @Column()
  description: string;

  @Column()
  dateStart: Date;

  @Column()
  dateEnd: Date;

  @ManyToOne(() => UserEntity, (user) => user.createdTasks)
  creater: UserEntity;
}
