import { IsNotEmpty } from "class-validator";

export class CreateSponsorDto {

    @IsNotEmpty()
    readonly name: string;

    @IsNotEmpty()
    readonly nit: string;

}
