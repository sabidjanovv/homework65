import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Query,
  Delete,
  Patch,
} from "@nestjs/common";
import { VenueTypeService } from "./venue_type.service";
import { CreateVenueTypeDto } from "./dto/create-venue_type.dto";
import { UpdateVenueTypeDto } from "./dto/update-venue_type.dto";

@Controller("venue-type")
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @Post("create")
  async createVenueTypeDto(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.createVenueType(createVenueTypeDto);
  }

  @Get("all")
  async getAllVenueType() {
    return this.venueTypeService.getAllVenueType();
  }

  @Get("search")
  async getVenueTypeByName(@Query("name") name: string) {
    return this.venueTypeService.getVenueTypeByName(name);
  }

  @Get(":id")
  async getVenueTypeById(@Param("id") id: number) {
    return this.venueTypeService.getVenueTypeById(id);
  }

  @Delete(":id")
  async deleteVenueType(@Param("id") id: number) {
    return this.venueTypeService.deleteVenueType(id);
  }

  @Patch(":id")
  async updateVenueType(
    @Param("id") id: number,
    @Body() updateVenueTypeDto: UpdateVenueTypeDto
  ) {
    return this.venueTypeService.updateVenueType(id, updateVenueTypeDto);
  }
}
