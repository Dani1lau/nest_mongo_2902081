import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongodb";

@Schema()
export class User {

    @Prop()
    name: string

    @Prop()
    email: string

    @Prop()
    role: string

    @Prop()
    password: string
    
}

export const UserSchema = SchemaFactory.createForClass(User)