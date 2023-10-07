import * as mongoose from 'mongoose';

export const DATABASE_PROVIDER = 'DATABASE_CONNECTION'

export const databaseProviders = [
  {
    provide: DATABASE_PROVIDER,
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect(process.env.DATABASE_URI, {dbName: process.env.DATABASE_NAME, auth: {username: process.env.DATABASE_USER, password: process.env.DATABASE_PASSWORD}})
  }
];