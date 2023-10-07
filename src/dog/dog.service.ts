import { Inject, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Dog } from './schemas/dog.model';

@Injectable()
export class DogService {

  constructor(@Inject(Dog.name) private dogModel: Model<Dog>) { }

  addDog(dog: Dog) {
    const createdDog = new this.dogModel(dog);
    return createdDog.save();
  }

  async removeDog(id: string): Promise<void> {
    await this.dogModel.findByIdAndDelete(id).exec();
  }

  async updateDog(id: String, dog: Dog): Promise<void> {
    await this.dogModel.findByIdAndUpdate(id, dog).exec();
  }
}