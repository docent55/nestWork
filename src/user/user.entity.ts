import * as bcrypt from 'bcrypt';
import { TaskEntity } from 'src/task/task.entity';
import {
  BeforeInsert,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  username: string;

  @Column({ default: '' })
  bio: string;

  @Column()
  password: string;

  @BeforeInsert()
  async hashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }

  @OneToMany(() => TaskEntity, (task) => task.creater)
  createdTasks: TaskEntity[];

  @ManyToMany(() => TaskEntity)
  @JoinTable()
  inWork: TaskEntity[];
}
