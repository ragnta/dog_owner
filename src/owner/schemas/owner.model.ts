import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import * as mongoose from 'mongoose';
import { Dog } from 'src/dog/schemas/dog.model';

export type OwnerDocument = HydratedDocument<Owner>;

@Schema()
export class Owner {
  @Prop()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Dog', default: [] }] })
  dogs: Dog[];

}

export const OwnerSchema = SchemaFactory.createForClass(Owner);