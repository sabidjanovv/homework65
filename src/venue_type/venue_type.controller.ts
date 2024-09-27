import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Patch,
  UseGuards,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { VenueType } from "./models/venue_type.model";

@ApiTags("Venue Types")
@Controller("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({ summary: "Create a new venue type" })
  @ApiResponse({
    status: 201,
    description: "Create Venue Type",
    type: VenueType,
  })
  @Post("create")
  async createVenueType(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  @ApiOperation({ summary: "Get all venue types" })
  @ApiResponse({
    status: 200,
    description: "List of venue types",
    type: [VenueType],
  })
  @Get("all")
  async getAllVenueType() {
    return this.venueTypeService.getAllVenueType();
  }

  @ApiOperation({ summary: "Search venue type by name" })
  @ApiResponse({
    status: 200,
    description: "Get venue type by name",
    type: VenueType,
  })
  @Get("search")
  async getVenueTypeByName(@Query("name") name: string) {
    return this.venueTypeService.getVenueTypeByName(name);
  }

  @ApiOperation({ summary: "Get venue type by ID" })
  @ApiResponse({
    status: 200,
    description: "Get venue type by ID",
    type: VenueType,
  })
  @Get(":id")
  async getVenueTypeById(@Param("id") id: number) {
    return this.venueTypeService.getVenueTypeById(id);
  }

  @ApiOperation({ summary: "Delete venue type by ID" })
  @ApiResponse({
    status: 200,
    description: "Delete venue type",
    type: VenueType,
  })
  @Delete(":id")
  async deleteVenueType(@Param("id") id: number) {
    return this.venueTypeService.deleteVenueType(id);
  }

  @ApiOperation({ summary: "Update venue type by ID" })
  @ApiResponse({
    status: 200,
    description: "Update venue type",
    type: VenueType,
  })
  @Patch(":id")
  async updateVenueType(
    @Param("id") id: number,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.updateVenueType(id, updateVenueTypeDto);
  }
}
