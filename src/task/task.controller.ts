import { Controller, Post, Body, Get } from '@nestjs/common';
import { CreateTaskDto } from './dto/createTaskDto';
import { TaskService } from './task.service';

@Controller('task')
export class TaskController {
  constructor(private taskService: TaskService) {}

  @Post('create')
  async createTask(@Body() createTaskDto: CreateTaskDto) {
    return await this.taskService.createTask(createTaskDto);
  }

  @Get()
  async getTasks() {
    return await this.taskService.getTasks();
  }
}
