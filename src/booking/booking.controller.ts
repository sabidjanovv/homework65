import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Booking } from './models/booking.model';

@ApiTags("Booking")
@Controller("booking")
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Create a new booking" })
  @ApiResponse({
    status: 201,
    description: "Booked successfully",
    type: Booking,
  })
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }

  @ApiOperation({ summary: "Get all bookings" })
  @ApiResponse({
    status: 200,
    description: "List of all bookings",
    type: [Booking],
  })
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "Get a booking by ID" })
  @ApiResponse({
    status: 200,
    description: "Booking details by ID",
    type: Booking,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: "Update a booking by ID" })
  @ApiResponse({
    status: 200,
    description: "Updated booking",
    type: Booking,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: "Delete a booking by ID" })
  @ApiResponse({
    status: 200,
    description: "Deleted booking",
    type: Booking,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.bookingService.remove(+id);
  }
}
