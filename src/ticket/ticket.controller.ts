import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { Ticket } from "./models/ticket.model";

@ApiTags("Tickets")
@Controller("ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @ApiOperation({ summary: "Create a new ticket" })
  @ApiResponse({
    status: 201,
    description: "Ticket created successfully",
    type: Ticket,
  })
  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @ApiOperation({ summary: "Get all tickets" })
  @ApiResponse({
    status: 200,
    description: "List of all tickets",
    type: [Ticket],
  })
  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @ApiOperation({ summary: "Get ticket by ID" })
  @ApiResponse({ status: 200, description: "Ticket details", type: Ticket })
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @ApiOperation({ summary: "Update ticket by ID" })
  @ApiResponse({
    status: 200,
    description: "Ticket updated successfully",
    type: Ticket,
  })
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @ApiOperation({ summary: "Delete ticket by ID" })
  @ApiResponse({
    status: 200,
    description: "Ticket deleted successfully",
    type: Ticket,
  })
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}
