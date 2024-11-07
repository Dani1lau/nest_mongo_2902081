import { CreateBootcampDto } from "./create-bootcamp.dto"
import { PartialType } from "@nestjs/mapped-types"

export class UpdateBootcampDto 
    extends PartialType(CreateBootcampDto){}
