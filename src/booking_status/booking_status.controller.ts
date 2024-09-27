import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { BookingStatusService } from "./booking_status.service";
import { CreateBookingStatusDto } from "./dto/create-booking_status.dto";
import { UpdateBookingStatusDto } from "./dto/update-booking_status.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { BookingStatus } from "./models/booking_status.model";

@ApiTags("Booking Status")
@Controller("booking-status")
export class BookingStatusController {
  constructor(private readonly bookingStatusService: BookingStatusService) {}

  @ApiOperation({ summary: "Create a new booking status" })
  @ApiResponse({ status: 201, description: "Created", type: BookingStatus })
  @Post()
  create(@Body() createBookingStatusDto: CreateBookingStatusDto) {
    return this.bookingStatusService.create(createBookingStatusDto);
  }

  @ApiOperation({ summary: "Get all booking statuses" })
  @ApiResponse({
    status: 200,
    description: "List of booking statuses",
    type: [BookingStatus],
  })
  @Get()
  findAll() {
    return this.bookingStatusService.findAll();
  }

  @ApiOperation({ summary: "Get booking status by ID" })
  @ApiResponse({
    status: 200,
    description: "Booking status found",
    type: BookingStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update booking status by ID" })
  @ApiResponse({
    status: 200,
    description: "Updated booking status",
    type: BookingStatus,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateBookingStatusDto: UpdateBookingStatusDto
  ) {
    return this.bookingStatusService.update(+id, updateBookingStatusDto);
  }

  @ApiOperation({ summary: "Delete booking status by ID" })
  @ApiResponse({
    status: 200,
    description: "Deleted booking status",
    type: BookingStatus,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingStatusService.remove(+id);
  }
}
