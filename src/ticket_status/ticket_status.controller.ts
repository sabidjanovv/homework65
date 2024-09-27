import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketStatusService } from "./ticket_status.service";
import { CreateTicketStatusDto } from "./dto/create-ticket_status.dto";
import { UpdateTicketStatusDto } from "./dto/update-ticket_status.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { TicketStatus } from "./models/ticket_status.model";

@ApiTags("Ticket Status")
@Controller("ticket-status")
export class TicketStatusController {
  constructor(private readonly ticketStatusService: TicketStatusService) {}

  @ApiOperation({ summary: "Create a new ticket status" })
  @ApiResponse({ status: 201, description: "Created", type: TicketStatus })
  @Post()
  create(@Body() createTicketStatusDto: CreateTicketStatusDto) {
    return this.ticketStatusService.create(createTicketStatusDto);
  }

  @ApiOperation({ summary: "Get all ticket statuses" })
  @ApiResponse({
    status: 200,
    description: "List of ticket statuses",
    type: [TicketStatus],
  })
  @Get()
  findAll() {
    return this.ticketStatusService.findAll();
  }

  @ApiOperation({ summary: "Get ticket status by ID" })
  @ApiResponse({
    status: 200,
    description: "Ticket status found",
    type: TicketStatus,
  })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketStatusService.findOne(+id);
  }

  @ApiOperation({ summary: "Update ticket status by ID" })
  @ApiResponse({
    status: 200,
    description: "Updated ticket status",
    type: TicketStatus,
  })
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateTicketStatusDto: UpdateTicketStatusDto
  ) {
    return this.ticketStatusService.update(+id, updateTicketStatusDto);
  }

  @ApiOperation({ summary: "Delete ticket status by ID" })
  @ApiResponse({
    status: 200,
    description: "Deleted ticket status",
    type: TicketStatus,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketStatusService.remove(+id);
  }
}
