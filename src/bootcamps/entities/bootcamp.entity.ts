import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongodb";
import { Category, CategorySchema } from "./category.entity";
import { Sponsor } from "src/sponsor/entities/sponsor.entity";
import { Types } from "mongoose";
import { IsMongoId } from "class-validator";

@Schema()
export class Bootcamp {
    @Prop()
    name: string;

    @Prop()
    phone: number;

    @Prop()
    address: string;

    @Prop()
    averageRating: number;

    @Prop()
    createAt: Date

    @Prop({type: CategorySchema, required: true})
    category: Category;

    @Prop({type: Types.ObjectId, 
        ref: Sponsor.name}
    )
    sponsor: Sponsor | Types.ObjectId

    @Prop({type: [{name: {type: String}, color: {type: String}}]})
    skills: Types.Array<Record<string, any>>
    
}

export const BootcampSchema = SchemaFactory.createForClass(Bootcamp)