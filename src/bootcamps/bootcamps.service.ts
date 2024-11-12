import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBootcampDto } from './dto/create-bootcamp.dto';
import { UpdateBootcampDto } from './dto/update-bootcamp.dto';
import { Bootcamp } from './entities/bootcamp.entity';
import { User } from 'src/users/entities/user.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Category } from './entities/category.entity';

@Injectable()
export class BootcampsService {

  constructor(@InjectModel(Bootcamp.name) private bootcampModel: Model<Bootcamp>) { }

  async create(createBootcampDto: CreateBootcampDto) {

    const newBootcamp = new this.bootcampModel(createBootcampDto);
    try {
      return await newBootcamp.save()
    } catch (error) {
      throw new BadRequestException(
        `Error al guardar: ${error}`
      )

    };
  }

  async findAll() {
    return await this.bootcampModel.find().populate('category').exec();
  }

  findOne(id: string) {
    return this.bootcampModel.find({ _id: id }).exec();
  }

  async update(id: string, updateBootcampDto: UpdateBootcampDto) {

    return this.bootcampModel.findByIdAndUpdate(id, { $set: updateBootcampDto })
    /*
      // Buscar el bootcamp por su ID
      const updBootcamp = await this.bootcampModel.findById(id);

      // Fusionar los datos del dto con el documento actual
      updBootcamp.set(updateBootcampDto);

      // Guardar los cambios en la base de datos
      return await updBootcamp.save();
    */
  }

  async remove(id: string) {
    // Buscar el Bootcamp por ID
    const bootcamp = await this.bootcampModel.findById(id);

    // Eliminar el Bootcamp
    await this.bootcampModel.deleteOne({ _id: id });

    return { message: `Bootcamp con id ${id} ha sido eliminado` };
  }

}
