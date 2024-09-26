import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags("Tadbir otkazuvchi obyektlar")
@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @Post("create")
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @Get("all")
  findAll() {
    return this.venueService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.venueService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: number, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(id, updateVenueDto);
  }

  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.venueService.remove(id);
  }
}
