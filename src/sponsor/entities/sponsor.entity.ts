import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema()
export class Sponsor {

    @Prop({required: true, unique: true})
    name: string;

    @Prop({required: true, unique: true})
    nit: string;

}

export const SponsorSchema = SchemaFactory.createForClass(Sponsor);