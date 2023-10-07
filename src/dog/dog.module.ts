import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { DogController } from "./dog.controller";
import { DogService } from "./dog.service";
import { OwnerService } from "src/owner/owner.service";
import { dogProviders } from "./dog.provider";
import { OwnerModule } from "src/owner/owner.module";


@Module({
  imports: [DatabaseModule, OwnerModule],
  controllers: [DogController],
  providers: [DogService, OwnerService, ...dogProviders],
})
export class DogModule { }