import { IsArray, IsNotEmpty } from "class-validator";
import { minimumSkill } from "../entities/course.entity";

export class CreateCourseDto {

    @IsNotEmpty()
    readonly title : string

    @IsNotEmpty()
    readonly description : string
    
    @IsNotEmpty()
    readonly weeks : number
    
    @IsNotEmpty()
    readonly tuition : number
    
    @IsNotEmpty()
    readonly minimum_skill: minimumSkill;

    @IsNotEmpty()
    readonly createAt: Date

    @IsNotEmpty()
    @IsArray()
    readonly skills: any[]

}
