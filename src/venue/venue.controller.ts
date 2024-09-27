import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Venue } from './models/venue.model';

@ApiTags("Tadbir otkazuvchi obyektlar")
@Controller("venue")
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({ summary: "Yangi venue qo'shish" })
  @ApiResponse({
    status: 201,
    description: "Create Venue",
    type: Venue,
  })
  @Post("create")
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({ summary: "Barcha venuelar ro'yxatini ko'rish" })
  @ApiResponse({
    status: 200,
    description: "List of venues",
    type: [Venue],
  })
  @Get("all")
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({ summary: "Venue ID bo'yicha ko'rish" })
  @ApiResponse({
    status: 200,
    description: "Get Venue by ID",
    type: Venue,
  })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.venueService.findOne(id);
  }

  @ApiOperation({ summary: "Venue ID bo'yicha tahrirlash" })
  @ApiResponse({
    status: 200,
    description: "Update Venue by ID",
    type: Venue,
  })
  @Patch(":id")
  update(@Param("id") id: number, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(id, updateVenueDto);
  }

  @ApiOperation({ summary: "Venue ID bo'yicha o'chirish" })
  @ApiResponse({ status: 200, description: "Delete Venue by ID" })
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.venueService.remove(id);
  }
}
