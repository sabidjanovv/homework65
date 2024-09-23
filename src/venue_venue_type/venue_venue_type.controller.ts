import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueVenueTypeService } from './venue_venue_type.service';
import { CreateVenueVenueTypeDto } from './dto/create-venue_venue_type.dto';
import { UpdateVenueVenueTypeDto } from './dto/update-venue_venue_type.dto';

@Controller('venue-venue-type')
export class VenueVenueTypeController {
  constructor(private readonly venueVenueTypeService: VenueVenueTypeService) {}

  @Post("create")
  create(@Body() createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeService.create(createVenueVenueTypeDto);
  }

  @Get("all")
  findAll() {
    return this.venueVenueTypeService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueVenueTypeService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueVenueTypeDto: UpdateVenueVenueTypeDto) {
    return this.venueVenueTypeService.update(+id, updateVenueVenueTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueVenueTypeService.remove(+id);
  }
}
