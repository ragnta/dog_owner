import { Controller, Get, Param, Body, Delete, Put } from '@nestjs/common';
import { OwnerService } from './owner.service';
import { Owner } from './schemas/owner.model';
import { BaseOwnerDto } from './dto/owner.dto';


@Controller('owner')
export class OwnerController {
  constructor(private readonly ownerService: OwnerService) {}

  @Get()
  getAllOwners(): Promise<Owner[]> {
    return this.ownerService.getAllOwner();
  }

  @Get(':id')
  async getOwnerById(@Param('id')OwnerId: string){
    return await this.ownerService.getOwner(OwnerId);
  }

  @Put()
  createOwner(@Body() Owner: BaseOwnerDto): Promise<Owner> {
    return this.ownerService.createOwner(Owner);
  }

  @Delete(':id')
  removeOwner(@Param('id') id: string): void {
    this.ownerService.removeOwner(id);
  }
}