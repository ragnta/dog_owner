import { Model, Mongoose } from "mongoose";
import { Dog, DogSchema } from "./schemas/dog.model";
import { DATABASE_PROVIDER } from "src/database/database.provider";
import { Owner } from "src/owner/schemas/owner.model";

export const dogProviders = [
    {
        provide: Dog.name,
        useFactory: (mongoose: Mongoose, ownerModel: Model<Dog>) => {

            const schema = DogSchema;

            schema.post('findOneAndDelete', async (doc) => {
                await ownerModel.updateOne({ dogs: doc._id }, { $pull: { dogs: doc._id } }, { multi: true });
            })

            return mongoose.model(Dog.name, schema)
        },
        inject: [DATABASE_PROVIDER, Owner.name],
    },
];