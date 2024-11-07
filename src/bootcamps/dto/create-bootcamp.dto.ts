import {IsNotEmpty, IsAlpha, IsPhoneNumber, IsString, IsInt, IsDate, Min, Max, IsPositive} from 'class-validator'

export class CreateBootcampDto {

    @IsNotEmpty()
    @IsAlpha()
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

}
