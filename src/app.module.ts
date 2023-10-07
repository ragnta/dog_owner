import { Module } from '@nestjs/common';
import { OwnerModule } from './owner/owner.module';
import { DogModule } from './dog/dog.module';

@Module({
  imports: [OwnerModule, DogModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
