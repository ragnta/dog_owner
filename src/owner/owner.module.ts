import { Module } from "@nestjs/common";
import { DatabaseModule } from "src/database/database.module";
import { OwnerService } from "src/owner/owner.service";
import { ownerProviders } from "./owner.provider";
import { OwnerController } from "./owner.controller";

@Module({
  imports: [DatabaseModule],
  controllers: [OwnerController],
  providers: [OwnerService, ...ownerProviders],
  exports: [OwnerService, ...ownerProviders]
})
export class OwnerModule { }