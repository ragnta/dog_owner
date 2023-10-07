import { Controller, Post, Delete, Body, Param, Patch } from '@nestjs/common';
import { DogService } from './dog.service';
import { BaseDogDto } from './dto/dog.dto';
import { OwnerService } from 'src/owner/owner.service';


@Controller('dog')
export class DogController {
  constructor(
    private readonly dogService: DogService,
    private readonly ownersService: OwnerService,
  ) {
  }

  @Post(':ownerId')
  async addDog(@Body() dog: BaseDogDto, @Param('ownerId') ownerId: string) {
    const createdDog = await this.dogService.addDog(dog);
    this.ownersService.addDogToOwner(ownerId, createdDog._id); 
  }

  @Delete(':id')
  removeDog(@Param('id') id: string): void {
    this.dogService.removeDog(id);
  }

  @Patch(':id')
  updateDog(@Param('id') id: string, @Body() dog: BaseDogDto) {
    this.dogService.updateDog(id, dog);
  }
}