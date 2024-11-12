import {IsNotEmpty, IsAlpha, IsString, IsInt, Min, Max, IsPositive, ValidateNested, IsMongoId, IsArray} from 'class-validator'
import { CreateCategoryDto } from './category.dtos';
import { Type } from 'class-transformer';
import { Types } from 'mongoose';
import { Prop } from '@nestjs/mongoose';


export class CreateBootcampDto {

    @IsNotEmpty()
    @IsString()
    readonly name: string

    @IsNotEmpty()
    @IsPositive()
    readonly phone: number;

    @IsString()
    @IsNotEmpty()
    readonly address: string;

    @IsNotEmpty()
    @IsInt()
    @Min(1)
    @Max(10)
    readonly averageRating: number;

    readonly createAt: Date;

    @IsNotEmpty()
    @ValidateNested()
    @Type(()=> CreateCategoryDto)
    readonly category : CreateCategoryDto;

    @IsMongoId()
    @IsNotEmpty()
    sponsor : string

    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]

}
