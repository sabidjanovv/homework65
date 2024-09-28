import { Column, DataType, HasMany, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";
import { Ticket } from "../../ticket/models/ticket.model";

interface TicketStatusCreationAttr {
  name: string;
}

@Table({ tableName: "ticket_status" })
export class TicketStatus extends Model<
  TicketStatus,
  TicketStatusCreationAttr
> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the ticket status (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "Open",
    description: "Status of the ticket",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @HasMany(() => Ticket)
  tickets: Ticket[];
}
