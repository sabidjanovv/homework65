import { ApiProperty } from "@nestjs/swagger";

export class CreateTicketDto {
  @ApiProperty({ example: 1, description: "ID of the event" })
  eventId: number;

  @ApiProperty({ example: 1, description: "ID of the seat" })
  seatId: number;

  @ApiProperty({ example: 100.0, description: "Ticket price" })
  price: number;

  @ApiProperty({ example: 10.0, description: "Service fee for the ticket" })
  service_fee: number;

  @ApiProperty({ example: 1, description: "ID of the ticket status" })
  statusId: number;

  @ApiProperty({ example: "Standard", description: "Type of the ticket" })
  ticket_type: string;
}
