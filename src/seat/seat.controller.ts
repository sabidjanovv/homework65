import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { SeatService } from "./seat.service";
import { CreateSeatDto } from "./dto/create-seat.dto";
import { UpdateSeatDto } from "./dto/update-seat.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Seat } from "./models/seat.model";

@ApiTags("Seat Management")
@Controller("seat")
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({ summary: "Create a new seat" })
  @ApiResponse({
    status: 201,
    description: "Seat successfully created",
    type: Seat,
  })
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({ summary: "Get all seats" })
  @ApiResponse({
    status: 200,
    description: "List of all seats",
    type: [Seat],
  })
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({ summary: "Get seat by ID" })
  @ApiResponse({
    status: 200,
    description: "Seat details by ID",
    type: Seat,
  })
  @Get(":id")
  findOne(@Param("id") id: number) {
    return this.seatService.findOne(id);
  }

  @ApiOperation({ summary: "Update seat by ID" })
  @ApiResponse({
    status: 200,
    description: "Seat successfully updated",
    type: Seat,
  })
  @Patch(":id")
  update(@Param("id") id: number, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(id, updateSeatDto);
  }

  @ApiOperation({ summary: "Delete seat by ID" })
  @ApiResponse({
    status: 200,
    description: "Seat successfully deleted",
    type: Seat,
  })
  @Delete(":id")
  remove(@Param("id") id: number) {
    return this.seatService.remove(id);
  }
}
