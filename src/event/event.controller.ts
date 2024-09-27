import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UploadedFile,
  UseInterceptors,
} from "@nestjs/common";
import { EventService } from "./event.service";
import { CreateEventDto } from "./dto/create-event.dto";
import { UpdateEventDto } from "./dto/update-event.dto";
import { FileInterceptor } from "@nestjs/platform-express";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Event } from "./models/event.model";

@ApiTags("Events")
@Controller("event")
@UseInterceptors(FileInterceptor("photo"))
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({ summary: "Create a new event" })
  @ApiResponse({
    status: 201,
    description: "Event created successfully",
    type: Event,
  })
  @Post()
  create(@Body() createEventDto: CreateEventDto, @UploadedFile() image: any) {
    return this.eventService.create(createEventDto, image);
  }

  @ApiOperation({ summary: "Get all events" })
  @ApiResponse({
    status: 200,
    description: "List of all events",
    type: [Event],
  })
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({ summary: "Get event by ID" })
  @ApiResponse({ status: 200, description: "Event details", type: Event })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({ summary: "Update event by ID" })
  @ApiResponse({
    status: 200,
    description: "Event updated successfully",
    type: Event,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({ summary: "Delete event by ID" })
  @ApiResponse({
    status: 200,
    description: "Event deleted successfully",
    type: Event,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventService.remove(+id);
  }
}
