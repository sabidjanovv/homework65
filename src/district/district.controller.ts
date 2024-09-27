import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { DistrictService } from "./district.service";
import { CreateDistrictDto } from "./dto/create-district.dto";
import { UpdateDistrictDto } from "./dto/update-district.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { District } from "./models/district.model";

@ApiTags("Districts")
@Controller("district")
export class DistrictController {
  constructor(private readonly districtService: DistrictService) {}

  @ApiOperation({ summary: "Create a new district" })
  @ApiResponse({
    status: 201,
    description: "District created successfully",
    type: District,
  })
  @Post()
  create(@Body() createDistrictDto: CreateDistrictDto) {
    return this.districtService.create(createDistrictDto);
  }

  @ApiOperation({ summary: "Get all districts" })
  @ApiResponse({
    status: 200,
    description: "List of districts",
    type: [District],
  })
  @Get()
  findAll() {
    return this.districtService.findAll();
  }

  @ApiOperation({ summary: "Get a district by ID" })
  @ApiResponse({
    status: 200,
    description: "District found",
    type: District,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.districtService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a district by ID" })
  @ApiResponse({
    status: 200,
    description: "District updated successfully",
    type: District,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDistrictDto: UpdateDistrictDto
  ) {
    return this.districtService.update(+id, updateDistrictDto);
  }

  @ApiOperation({ summary: "Delete a district by ID" })
  @ApiResponse({
    status: 200,
    description: "District deleted successfully",
    type: District,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.districtService.remove(+id);
  }
}
