import { Mongoose } from 'mongoose';
import { Owner, OwnerSchema } from './schemas/owner.model';
import { DATABASE_PROVIDER } from 'src/database/database.provider';

export const ownerProviders = [
  {
    provide: Owner.name,
    useFactory: (mongoose: Mongoose) => mongoose.model(Owner.name, OwnerSchema),
    inject: [DATABASE_PROVIDER],
  },
];