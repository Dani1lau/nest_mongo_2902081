import { Injectable } from '@nestjs/common';
import { CreateCourseDto } from './dto/create-course.dto';
import { UpdateCourseDto } from './dto/update-course.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(Course.name) private courseModel: Model<Course>){}

  create(createCourseDto: CreateCourseDto) {
    return 'This action adds a new course';
  }

  async findAll() {
    return await this.courseModel.find().exec();
  }

  findOne(id: string) {
    return this.courseModel.find({_id : id}).exec();
  }

  update(id: number, updateCourseDto: UpdateCourseDto) {
    return `This action updates a #${id} course`;
  }

  remove(id: number) {
    return `This action removes a #${id} course`;
  }
}
