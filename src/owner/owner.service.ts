import { Inject, Injectable } from '@nestjs/common';
import mongoose, { Model } from 'mongoose';
import { Owner } from './schemas/owner.model';
import { BaseOwnerDto } from './dto/owner.dto';


@Injectable()
export class OwnerService {
  constructor(@Inject(Owner.name) private ownerModel: Model<Owner>) { }

  getAllOwner(): Promise<Owner[]> {
    return this.ownerModel.find().exec();
  }

  getOwner(ownerId: string){
    return this.ownerModel.findById(ownerId).populate('dogs').exec();
  }

  createOwner(owner: BaseOwnerDto): Promise<Owner> {
    const createdOwner = new this.ownerModel(owner);
    return createdOwner.save();
  }

  removeOwner(id: string): void {
    this.ownerModel.findByIdAndDelete(id).exec();
  }

  async addDogToOwner(ownerId: string, dog: mongoose.Types.ObjectId): Promise<Owner> {
    return await this.ownerModel.findByIdAndUpdate(ownerId,
      {$addToSet: { dogs: dog }},
      {new: true});
  }
}