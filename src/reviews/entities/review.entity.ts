import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongodb";

@Schema()
export class Review {

    @Prop()
    title: string

    @Prop()
    comment: string

    @Prop()
    reating: number

}

export const ReviewSchema = SchemaFactory.createForClass(Review)