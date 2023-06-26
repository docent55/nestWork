import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Between, LessThan, MoreThan } from 'typeorm';
import { TaskEntity } from './task.entity';
import { Repository } from 'typeorm';
import { CreateTaskDto } from './dto/createTaskDto';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(TaskEntity)
    private readonly taskRepository: Repository<TaskEntity>,
  ) {}

  async createTask(createTaskDto: CreateTaskDto) {
    const taskName = await this.taskRepository.findOne({
      where: { number: createTaskDto.number },
    });

    if (taskName) {
      throw new HttpException(
        'This number task already exist',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    const newTask = new TaskEntity();

    Object.assign(newTask, createTaskDto);

    return await this.taskRepository.save(newTask);
  }

  async getTasks() {
    const query = this.taskRepository.createQueryBuilder('task');
    // .where('task.number = :number', { number: 623 })
    // .andWhere('task.id = :id', { id: 7 });

    console.log(await query.getManyAndCount());
    return await query.getMany();
  }
}
