import { Table, Column, DataType, Model, HasMany } from "sequelize-typescript";
import { Seat } from "../../seat/models/seat.model";
import { ApiProperty } from "@nestjs/swagger";

interface SeatTypeAttr {
  name: string;
}

@Table({ tableName: "seat_type" })
export class SeatType extends Model<SeatType, SeatTypeAttr> {
  @ApiProperty({
    example: 1,
    description: "O'rin turining unikal ID raqami (autoIncrement)",
  })
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: "VIP",
    description: "O'rin turining nomi",
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name: string;

  @HasMany(() => Seat)
  venue_seats: Seat[];
}
