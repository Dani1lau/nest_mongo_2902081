import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateSponsorDto } from './dto/create-sponsor.dto';
import { UpdateSponsorDto } from './dto/update-sponsor.dto';
import { Sponsor } from './entities/sponsor.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SponsorService {

  constructor(@InjectModel(Sponsor.name) private sponsorModel: Model<Sponsor>) { }

  async create(createSponsorDto: CreateSponsorDto) {
    const newSponsor = new this.sponsorModel(createSponsorDto);
    try {
      return await newSponsor.save()
    } catch (error) {
      throw new BadRequestException(
        `Error al guardar: ${error}`
      )
    };
  }

  findAll() {
    return `This action returns all sponsor`;
  }

  findOne(id: number) {
    return `This action returns a #${id} sponsor`;
  }

  update(id: number, updateSponsorDto: UpdateSponsorDto) {
    return `This action updates a #${id} sponsor`;
  }

  remove(id: number) {
    return `This action removes a #${id} sponsor`;
  }
}
