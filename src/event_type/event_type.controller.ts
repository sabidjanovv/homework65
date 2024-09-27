import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { EventTypeService } from "./event_type.service";
import { CreateEventTypeDto } from "./dto/create-event_type.dto";
import { UpdateEventTypeDto } from "./dto/update-event_type.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { EventType } from "./models/event_type.model";

@ApiTags("Event Types")
@Controller("event-type")
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @ApiOperation({ summary: "Create a new event type" })
  @ApiResponse({
    status: 201,
    description: "Event type created successfully",
    type: EventType,
  })
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @ApiOperation({ summary: "Get all event types" })
  @ApiResponse({
    status: 200,
    description: "List of event types",
    type: [EventType],
  })
  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @ApiOperation({ summary: "Get an event type by ID" })
  @ApiResponse({
    status: 200,
    description: "Found event type",
    type: EventType,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @ApiOperation({ summary: "Update an event type by ID" })
  @ApiResponse({
    status: 200,
    description: "Updated event type",
    type: EventType,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateEventTypeDto: UpdateEventTypeDto
  ) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @ApiOperation({ summary: "Delete an event type by ID" })
  @ApiResponse({
    status: 200,
    description: "Deleted event type",
    type: EventType,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.eventTypeService.remove(+id);
  }
}
