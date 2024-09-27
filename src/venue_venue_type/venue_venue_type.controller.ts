import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { VenueVenueTypeService } from "./venue_venue_type.service";
import { CreateVenueVenueTypeDto } from "./dto/create-venue_venue_type.dto";
import { UpdateVenueVenueTypeDto } from "./dto/update-venue_venue_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VenueVenueType } from "./models/venue_venue_type.model";

@ApiTags("Venue-Venue Type")
@Controller("venue-venue-type")
export class VenueVenueTypeController {
  constructor(private readonly venueVenueTypeService: VenueVenueTypeService) {}

  @ApiOperation({ summary: "Create a new venue-venue type relation" })
  @ApiResponse({
    status: 201,
    description: "Venue-Venue Type relation created successfully",
    type: VenueVenueType,
  })
  @Post("create")
  create(@Body() createVenueVenueTypeDto: CreateVenueVenueTypeDto) {
    return this.venueVenueTypeService.create(createVenueVenueTypeDto);
  }

  @ApiOperation({ summary: "Get all venue-venue type relations" })
  @ApiResponse({
    status: 200,
    description: "List of venue-venue type relations",
    type: [VenueVenueType],
  })
  @Get("all")
  findAll() {
    return this.venueVenueTypeService.findAll();
  }

  @ApiOperation({ summary: "Get a venue-venue type relation by ID" })
  @ApiResponse({
    status: 200,
    description: "Found venue-venue type relation",
    type: VenueVenueType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.venueVenueTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a venue-venue type relation by ID" })
  @ApiResponse({
    status: 200,
    description: "Updated venue-venue type relation",
    type: VenueVenueType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateVenueVenueTypeDto: UpdateVenueVenueTypeDto
  ) {
    return this.venueVenueTypeService.update(+id, updateVenueVenueTypeDto);
  }

  @ApiOperation({ summary: "Delete a venue-venue type relation by ID" })
  @ApiResponse({
    status: 200,
    description: "Deleted venue-venue type relation",
    type: VenueVenueType,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.venueVenueTypeService.remove(+id);
  }
}
