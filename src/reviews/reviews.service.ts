import { Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Review } from './entities/review.entity';

@Injectable()
export class ReviewsService {

  constructor(@InjectModel(Review.name) private reviewModel: Model<Review>){}

  create(createReviewDto: CreateReviewDto) {
    return 'This action adds a new review';
  }

  async findAll() {
    return await this.reviewModel.find().exec();
  }

  findOne(id: string) {
    return this.reviewModel.find({_id : id}).exec();
  }

  update(id: number, updateReviewDto: UpdateReviewDto) {
    return `This action updates a #${id} review`;
  }

  remove(id: number) {
    return `This action removes a #${id} review`;
  }
}
