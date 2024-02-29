import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';

@Schema({ timestamps: true })
export class User {
  id: mongoose.Types.ObjectId;

  @Prop()
  username: string;

  @Prop()
  password: string;

  @Prop()
  pnumber: number;

  @Prop()
  role: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
