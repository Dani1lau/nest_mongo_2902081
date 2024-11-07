import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document, Double, Timestamp } from "mongodb";

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

    @Prop()
    minimum_skill: minimumSkill

    @Prop()
    createAt: Timestamp

}

enum minimumSkill{
    "Beginner",
    "Intermediate",
    "Advance"
}

export const CourseSchema = SchemaFactory.createForClass(Course)