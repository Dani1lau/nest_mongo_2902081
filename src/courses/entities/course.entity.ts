import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Double, Timestamp } from "mongodb";
import { Types } from "mongoose";

export enum minimumSkill {
    Beginner = "Beginner",
    Intermediate = "Intermediate",
    Advanced = "Advanced"
}

@Schema()
export class Course {

    @Prop()
    title: string

    @Prop()
    description: string

    @Prop()
    weeks: number

    @Prop()
    tuition: number

    @Prop({ enum: minimumSkill })  
    minimum_skill: minimumSkill;

    @Prop()
    createAt: Timestamp

    @Prop({type: [{name: {type: String}, color: {type: String}}]})
    skills: Types.Array<Record<string, any>>

}

export const CourseSchema = SchemaFactory.createForClass(Course)