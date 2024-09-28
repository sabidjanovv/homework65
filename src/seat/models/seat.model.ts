import { ApiProperty } from "@nestjs/swagger";
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  HasOne,
  Model,
  Table,
} from "sequelize-typescript";
import { SeatType } from "../../seat_type/models/seat_type.model";
import { Ticket } from "../../ticket/models/ticket.model";
import { Venue } from "../../venue/models/venue.model";

interface SeatCreationAttr {
  sector: string;
  row_number: number;
  number: number;
  locationInSchema: string;
  venueId: number;
  seatTypeId: number;
}

@Table({ tableName: "seat" })
export class Seat extends Model<Seat, SeatCreationAttr> {
  @ApiProperty({
    example: 1,
    description: "Unique ID of the seat (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "A",
    description: "Sector of the seat",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  sector: string;

  @ApiProperty({
    example: 1,
    description: "Row number of the seat",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  row_number: number;

  @ApiProperty({
    example: 5,
    description: "Seat number",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  number: number;

  @ForeignKey(() => Venue)
  @ApiProperty({
    example: 1,
    description: "ID of the venue",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  venueId: number;

  @BelongsTo(() => Venue)
  venue: Venue;

  @ForeignKey(() => SeatType)
  @ApiProperty({
    example: 2,
    description: "ID of the seat type",
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  seatTypeId: number;

  @BelongsTo(() => SeatType)
  seatType: SeatType;

  @ApiProperty({
    example: "1A",
    description: "Location in the seating schema",
  })
  @Column({
    type: DataType.STRING,
  })
  locationInSchema: string;

  @HasOne(() => Ticket)
  ticket: Ticket[];
}
